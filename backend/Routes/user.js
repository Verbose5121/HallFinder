import express from "express";
import {GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, updateProfile} from 'firebase/auth';
import { auth, db } from "../Firebase/firebase.js";
import {getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";

export const userRouter = express.Router();

userRouter.post("/login",async (req, res)=>{

const userData = req.body;
try {
    const userCred = await signInWithEmailAndPassword(auth, userData[0], userData[1])
    res.send(userCred.user);
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




    // {
    //     "user": {
    //       "uid": "zc2OF6szzNhXCLPsFFshTaDPGqI2",
    //       "email": "user1@gmail.com",
    //       "emailVerified": false,
    //       "isAnonymous": false,
    //       "providerData": [
    //         {
    //           "providerId": "password",
    //           "uid": "user1@gmail.com",
    //           "displayName": null,
    //           "email": "user1@gmail.com",
    //           "phoneNumber": null,
    //           "photoURL": null
    //         }
    //       ],
    //       "stsTokenManager": {
    //         "refreshToken": "APZUo0Td3qJr0WE0Qex8iUfrE0I-4nBfrQUKJsty2CdAKwnVpKv-6eNzFi8qx46qUR5F1xNXjhHqeOducKc3vxue0s6m5spGOm9ejreoHQHDPZGcY7bmcRQejWygLReKvMdWwHTHQfMAZ5UJJyDD7gTEbFrTxC4i62w9h3Dd8p-b8WGGkIsJ9JejxkHI8nxvlPw1xwelD8hLI2szhjfRJHtaXt5rJBwBx7yApTwVqErOBj3TcBh6H4c",
    //         "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU3OTMwMjdkYWI0YzcwNmQ2ODg0NGI4MDk2ZTBlYzQzMjYyMjIwMDAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY29tbXVuaXR5LXJlc291cmNlcy0zODE2YiIsImF1ZCI6ImNvbW11bml0eS1yZXNvdXJjZXMtMzgxNmIiLCJhdXRoX3RpbWUiOjE2ODI4NzQ0NTMsInVzZXJfaWQiOiJ6YzJPRjZzenpOaFhDTFBzRkZzaFRhRFBHcUkyIiwic3ViIjoiemMyT0Y2c3p6TmhYQ0xQc0ZGc2hUYURQR3FJMiIsImlhdCI6MTY4Mjg3NDQ1MywiZXhwIjoxNjgyODc4MDUzLCJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ1c2VyMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.qQ91vvdMU2mcpL6uyyBqfXBKqvBKujSW8F-AWzbVJ95ugZNMGHuuzPQBvAftI0Y-K978YrYkZl-2p2KiW99dwwrZlmO5jXP0AMl5P3q7mMzvTwuzg4lmYPt8uoTPWtsFmDhIN2-O71A_WDUdbhzG_9g8IMt41xrnynUgCNCZWVAhgTa0qeqw1qmfig378L5YwOIAQChS_jaUrkKFqP9CJutjvUbb6ivoDQMWXuLt5_mJHczy6o7SJzmNdkInSU61ONxhYqWh0qYY4dCVcnFbekQLA9rCKHZMCykdpP7Ic0RT-vl6G_ujcGmm2qBH-DRRwu2-iO58hcNcFa-cu4Y-0Q",
    //         "expirationTime": 1682878053187
    //       },
    //       "createdAt": "1682837358606",
    //       "lastLoginAt": "1682874453339",
    //       "apiKey": "AIzaSyDYSiHH3HIjdIebo7HE9wGeAzQpiOF7EwM",
    //       "appName": "[DEFAULT]"
    //     },
    //     "providerId": null,
    //     "_tokenResponse": {
    //       "kind": "identitytoolkit#VerifyPasswordResponse",
    //       "localId": "zc2OF6szzNhXCLPsFFshTaDPGqI2",
    //       "email": "user1@gmail.com",
    //       "displayName": "",
    //       "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU3OTMwMjdkYWI0YzcwNmQ2ODg0NGI4MDk2ZTBlYzQzMjYyMjIwMDAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY29tbXVuaXR5LXJlc291cmNlcy0zODE2YiIsImF1ZCI6ImNvbW11bml0eS1yZXNvdXJjZXMtMzgxNmIiLCJhdXRoX3RpbWUiOjE2ODI4NzQ0NTMsInVzZXJfaWQiOiJ6YzJPRjZzenpOaFhDTFBzRkZzaFRhRFBHcUkyIiwic3ViIjoiemMyT0Y2c3p6TmhYQ0xQc0ZGc2hUYURQR3FJMiIsImlhdCI6MTY4Mjg3NDQ1MywiZXhwIjoxNjgyODc4MDUzLCJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ1c2VyMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.qQ91vvdMU2mcpL6uyyBqfXBKqvBKujSW8F-AWzbVJ95ugZNMGHuuzPQBvAftI0Y-K978YrYkZl-2p2KiW99dwwrZlmO5jXP0AMl5P3q7mMzvTwuzg4lmYPt8uoTPWtsFmDhIN2-O71A_WDUdbhzG_9g8IMt41xrnynUgCNCZWVAhgTa0qeqw1qmfig378L5YwOIAQChS_jaUrkKFqP9CJutjvUbb6ivoDQMWXuLt5_mJHczy6o7SJzmNdkInSU61ONxhYqWh0qYY4dCVcnFbekQLA9rCKHZMCykdpP7Ic0RT-vl6G_ujcGmm2qBH-DRRwu2-iO58hcNcFa-cu4Y-0Q",
    //       "registered": true,
    //       "refreshToken": "APZUo0Td3qJr0WE0Qex8iUfrE0I-4nBfrQUKJsty2CdAKwnVpKv-6eNzFi8qx46qUR5F1xNXjhHqeOducKc3vxue0s6m5spGOm9ejreoHQHDPZGcY7bmcRQejWygLReKvMdWwHTHQfMAZ5UJJyDD7gTEbFrTxC4i62w9h3Dd8p-b8WGGkIsJ9JejxkHI8nxvlPw1xwelD8hLI2szhjfRJHtaXt5rJBwBx7yApTwVqErOBj3TcBh6H4c",
    //       "expiresIn": "3600"
    //     },
    //     "operationType": "signIn"
    //   }


    // {
    //     "user": {
    //       "uid": "rWvGqOPWhGh732Zr6F1aQRkV9zH2",
    //       "email": "user10@gmail.com",
    //       "emailVerified": false,
    //       "displayName": "Ram",
    //       "isAnonymous": false,
    //       "providerData": [
    //         {
    //           "providerId": "password",
    //           "uid": "user10@gmail.com",
    //           "displayName": "Ram",
    //           "email": "user10@gmail.com",
    //           "phoneNumber": null,
    //           "photoURL": null
    //         }
    //       ],
    //       "stsTokenManager": {
    //         "refreshToken": "APZUo0Sz-L9XuixB5A6pyGs-n2XIGBquXL5gwW4z7MsqgLc5_Xc_6sLWthW_hRQDfUUnYPE4HrDbNo5Qml3BtoriotKk4wG5ix_qIu-BOJBNhNBEWLlEMfEHAr_mgSyyxhVPpUSCEsUG-nf2DCll3uRyJ0JKKH9cLPApKZwIdhcqRe8OmF2V3f_de6d8gT5zBvhZS_TGqPMhKeSgJ5v1iyVwcls-punN9akUYEDuZ4tjhAl7z6CKVVQ",
    //         "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU3OTMwMjdkYWI0YzcwNmQ2ODg0NGI4MDk2ZTBlYzQzMjYyMjIwMDAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmFtIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2NvbW11bml0eS1yZXNvdXJjZXMtMzgxNmIiLCJhdWQiOiJjb21tdW5pdHktcmVzb3VyY2VzLTM4MTZiIiwiYXV0aF90aW1lIjoxNjgyODc0ODY1LCJ1c2VyX2lkIjoicld2R3FPUFdoR2g3MzJacjZGMWFRUmtWOXpIMiIsInN1YiI6InJXdkdxT1BXaEdoNzMyWnI2RjFhUVJrVjl6SDIiLCJpYXQiOjE2ODI4NzQ4NjUsImV4cCI6MTY4Mjg3ODQ2NSwiZW1haWwiOiJ1c2VyMTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInVzZXIxMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.QAj9zUHt6ynYpDiwdX9xyK1qCvsZSlRGlm9OblEyEr4pG4yTs9uPDEvBQcP3CG-kK443j4coB0xydaO-wY4apfLTgpYwVJx__fFh2FlEbazc2eb3CogesrvgCFnnxXyyS0_jxiNNjCVHvitKhrjC4HLS8IfS8cim73JQEpnGV0Gr-95xWhYIDpvjsY1v-TH2T9Y7MdsybX8oBuHuuoNADAlgb523kDzykBUJD2hdapIxFWTbTeGGekI__z1IMbCRqDpP5uYukATqPO-lG10tr3SWXklsG1KELzBKHVPE-KMf95J74RdHKSr7Z53q_gNdnRofQEoYa3lTbR6Al4WH4Q",
    //         "expirationTime": 1682878465549
    //       },
    //       "createdAt": "1682845529194",
    //       "lastLoginAt": "1682874865698",
    //       "apiKey": "AIzaSyDYSiHH3HIjdIebo7HE9wGeAzQpiOF7EwM",
    //       "appName": "[DEFAULT]"
    //     },
    //     "providerId": null,
    //     "_tokenResponse": {
    //       "kind": "identitytoolkit#VerifyPasswordResponse",
    //       "localId": "rWvGqOPWhGh732Zr6F1aQRkV9zH2",
    //       "email": "user10@gmail.com",
    //       "displayName": "Ram",
    //       "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU3OTMwMjdkYWI0YzcwNmQ2ODg0NGI4MDk2ZTBlYzQzMjYyMjIwMDAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmFtIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2NvbW11bml0eS1yZXNvdXJjZXMtMzgxNmIiLCJhdWQiOiJjb21tdW5pdHktcmVzb3VyY2VzLTM4MTZiIiwiYXV0aF90aW1lIjoxNjgyODc0ODY1LCJ1c2VyX2lkIjoicld2R3FPUFdoR2g3MzJacjZGMWFRUmtWOXpIMiIsInN1YiI6InJXdkdxT1BXaEdoNzMyWnI2RjFhUVJrVjl6SDIiLCJpYXQiOjE2ODI4NzQ4NjUsImV4cCI6MTY4Mjg3ODQ2NSwiZW1haWwiOiJ1c2VyMTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInVzZXIxMEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.QAj9zUHt6ynYpDiwdX9xyK1qCvsZSlRGlm9OblEyEr4pG4yTs9uPDEvBQcP3CG-kK443j4coB0xydaO-wY4apfLTgpYwVJx__fFh2FlEbazc2eb3CogesrvgCFnnxXyyS0_jxiNNjCVHvitKhrjC4HLS8IfS8cim73JQEpnGV0Gr-95xWhYIDpvjsY1v-TH2T9Y7MdsybX8oBuHuuoNADAlgb523kDzykBUJD2hdapIxFWTbTeGGekI__z1IMbCRqDpP5uYukATqPO-lG10tr3SWXklsG1KELzBKHVPE-KMf95J74RdHKSr7Z53q_gNdnRofQEoYa3lTbR6Al4WH4Q",
    //       "registered": true,
    //       "refreshToken": "APZUo0Sz-L9XuixB5A6pyGs-n2XIGBquXL5gwW4z7MsqgLc5_Xc_6sLWthW_hRQDfUUnYPE4HrDbNo5Qml3BtoriotKk4wG5ix_qIu-BOJBNhNBEWLlEMfEHAr_mgSyyxhVPpUSCEsUG-nf2DCll3uRyJ0JKKH9cLPApKZwIdhcqRe8OmF2V3f_de6d8gT5zBvhZS_TGqPMhKeSgJ5v1iyVwcls-punN9akUYEDuZ4tjhAl7z6CKVVQ",
    //       "expiresIn": "3600"
    //     },
    //     "operationType": "signIn"
    //   }