import React, { useEffect, useState, createContext } from "react";
// import { app, auth } from "../../../backend/Firebase/firebase";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext("Default Context");

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);


  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
