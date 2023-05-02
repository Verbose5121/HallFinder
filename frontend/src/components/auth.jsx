import React, { useEffect, useState, createContext } from "react";
// import { app, auth } from "../../../backend/Firebase/firebase";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext("Default Context");

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("user") != "undefined" || null) {
      const currentUserData = JSON.parse(localStorage.getItem("user"));
      // console.log("abc"+currentUserData.uid);
      setCurrentUser(currentUserData);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
