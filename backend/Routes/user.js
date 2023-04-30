import express from "express";
import {GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from 'firebase/auth';
import { auth } from "../Firebase/firebase.js";
export const userRouter = express.Router();

userRouter.post("/login",async (req, res)=>{

const userData = req.body;
try {
    res.send(await signInWithEmailAndPassword(auth, userData[0], userData[1]));
  } catch (err) {
    console.error(err.message);
    res.status(403).send(err);  }

})