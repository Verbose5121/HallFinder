// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, updateProfile, onAuthStateChanged} from 'firebase/auth';
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYSiHH3HIjdIebo7HE9wGeAzQpiOF7EwM",
  authDomain: "community-resources-3816b.firebaseapp.com",
  projectId: "community-resources-3816b",
  storageBucket: "community-resources-3816b.appspot.com",
  messagingSenderId: "252130542906",
  appId: "1:252130542906:web:49389961e353259f3afc03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const auth = firebase.auth();
const auth = getAuth(app)

const storage = getStorage(app); 
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

function useAuth () { 
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}
function UserData() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      
      setName(data.name);
      
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    } 
  }
  useEffect(() => {
    if (loading) return;
    fetchUserName();
  }, [user, loading]);
};

// Storage functions 
async function uploadPhoto (file, currentUser) {
  const [user, loading, error] = useAuthState(auth);
  const photoRef = ref(storage, currentUser.uid + '.jpg');

  const fileRef = ref(storage, 'images/' + currentUser.uid + '.png');

  uploadBytes(photoRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
  
  //setLoading(true);
  // const snapshot = await uploadBytes(fileRef, file);
  
  const photoURL = await getDownloadURL(photoRef);

  //updateProfile(currentUser, {photoURL})
  

  //setLoading(false);

  alert("File uploaded!");
  return photoURL = await getDownloadURL(photoRef);
}

export {
  useAuth,
  firebaseConfig,
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  uploadPhoto,
  storage
};