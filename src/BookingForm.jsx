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
            alert("Please choose a file first!")
        }
        
        const storageRef = ref(storage, `/images/${currentUser.uid}/${photo.name}`)
        const uploadTask = uploadBytesResumable(storageRef, photo);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
            const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            
            // update progress
            setPercent(percent);
            },
            (err) => console.log(err),
            () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            });
            }
            );
    }

    console.log(currentUser);
    return (
        <div className="bookingForm">
            <form className="bookingDetailsForm">
            <label for="fullname">Full Name:</label><br></br>
            <input type="text" id="fullname" name="fullname" placeholder="Name" /><br></br>
            <label for="cc">Credit Card #:</label><br></br> 
            <input type="text" id="cc" name="cc" placeholder="####-####-####-####" /><br></br>
            <label for="photoid">Upload Photo ID:</label><br></br> 
            <input type="file" id="photoid" name="photoid" onChange={handleChange} />

            <button onClick={handleUpload}>
                Upload
            </button>
            {console.log(photoURL)}
            {console.log(photo)}
            {photo && (
            <div>
            <button onClick={() => setPhoto(null)}>Remove</button>
            </div> )}
            </form>
        </div>
    )
}




// // Create a Storage Ref w/ username
// let storageRef = firebase.storage().ref(user + '/profilePicture/' + file.name);

// // Upload file
// let task = storageRef.put(file);

//   return (
//     <div className="fields">
//       <h1>Upload and Display ID</h1>

//       {selectedImage && (
//         <div>
//           <img
//             alt="not found"
//             width={"250px"}
//             src={URL.createObjectURL(selectedImage)}
//           />
//           <br />
//           <button onClick={() => setSelectedImage(null)}>Remove</button>
//         </div>
//       )}

//       <br />
//       <br />
      
//       <input
//         type="file"
//         name="myImage"
//         onChange={(event) => {
//           console.log(event.target.files[0]);
//           setSelectedImage(event.target.files[0]);
//         }}
//       />
//     </div>
//   );


