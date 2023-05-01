import React, { useEffect, useState, createContext } from "react";
import { app, auth } from "../../../backend/Firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext("Default Context");

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    auth.currentUser;
  });

  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
        console.log("second" + user);
        if (user) {
          setCurrentUser(user);
          localStorage.setItem("user", user);
        } else {
          console.log("user is not signed in")
        }
    })
    
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
