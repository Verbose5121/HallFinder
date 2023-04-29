import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle, uploadPhoto, useAuth, storage } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import { query, collection, getDocs, where } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function BookingForm () {
    const currentUser = useAuth();
    const [photo, setPhoto] = useState(null);
    const [photoURL, setPhotoURL] = useState(null)
    const [loading, setLoading] = useState(false)
    const [percent, setPercent] = useState(0);

    function handleChange(e) {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]) 
        }
    }

    function handleClick () {
        uploadPhoto(photo, currentUser);
    }

    function handleUpload() {
        if (!photo) 
        {
            alert("Please select an image to upload")
        }
        
        const storageRef = ref(storage, `/images/${currentUser.uid}/${photo.name}`)
        const uploadTask = uploadBytesResumable(storageRef, photo);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
            const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            
            // update upload progress
            setPercent(percent);
            },
            (err) => console.log(err),
            () => {
            // retrieve download url 
            // TODO: update current user object with imageurl
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            });
            }
            );
    }


    console.log(currentUser);
    return (
        <div className="bookForm">
            <form className="bookForm-form">
            <input type="text" placeholder="Name" /> 
            <input type="text" placeholder="####-####-####-####" />
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>
                Upload
            </button>
            <p>{percent} "% done"</p>
            <img src={photoURL} alt="Avatar" className="avatar" />
            {console.log(photoURL)}
            {console.log(photo)}
            {photo && (
            <div>
            <img
                className="photoid"
                alt="not found"
                src={photoURL}
            />
            <br />
            <button onClick={() => setPhoto(null)}>Remove</button>
            </div> )}
            </form>
        </div>
    )
}
