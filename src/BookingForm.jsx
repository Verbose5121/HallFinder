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

    // useEffect(() => {
    //     if(currentUser?.photoURL) {
    //         setPhotoURL(currentUser.photoURL);
    //     }
    // }, [currentUser])

    
    // const [user, error] = useAuthState(auth);
    // const [userName, setUserName] = useState("");
      
    // const fetchUserName = async () => {

    //     try {
    //       const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    //       const doc = await getDocs(q);
    //       const data = doc.docs[0].data();
    
    //       setUserName(data.name);
    //       console.log(data.name)
    //     } catch (err) {
    //       console.error(err);
    //       alert("An error occured while fetching user data");
    //     }
    //   };
    
    //   useEffect(() => {
    //     if (loading) return;
    
    //     fetchUserName();
    //   }, [user, loading]);

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








// function BookForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, loading, error] = useAuthState(auth);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (loading) {
//       // maybe trigger a loading screen
//       return;
//     }
//     if (user) navigate("/dashboard");
//   }, [user, loading]);

//   return (
//     <div className="book">
//       <div className="book__container">
//         <input
//           type="text"
//           className="booking__textBox"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="E-mail Address"
//         />
//         <input
//           type="password"
//           className="login__textBox"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button
//           className="login__btn"
//           onClick={() => logInWithEmailAndPassword(email, password)}
//         >
//           Login
//         </button>
//         <button className="login__btn login__google" onClick={signInWithGoogle}>
//           Login with Google
//         </button>
//         <div>
//           <Link to="/reset">Forgot Password</Link>
//         </div>
//         <div>
//           Don't have an account? <Link to="/register">Register</Link> now.
//         </div>
//       </div>
//     </div>
//   );
// }
