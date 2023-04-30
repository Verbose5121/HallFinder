import express from "express";
import {GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, updateProfile} from 'firebase/auth';
import { auth, db } from "../Firebase/firebase.js";
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";

export const userRouter = express.Router();

userRouter.post("/login",async (req, res)=>{

const userData = req.body;
try {
    res.send(await signInWithEmailAndPassword(auth, userData[0], userData[1]));
  } catch (err) {
    console.error(err.message);
    res.status(403).send(err);  }

});

//Register with email and password!

userRouter.post("/reg",async (req, res)=>{

    const userData = req.body;
    try {
        const response = await createUserWithEmailAndPassword(auth, userData[1], userData[2]);
        const user = response.user;
        await updateProfile(user, {displayName: userData[0]});
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: userData[0],
          authProvider: "local",
          email: userData[1],
        });
        res.status(200).send(user);
      } catch (err) {
        console.error(err.message);
        res.status(403).send(err);  }
    });