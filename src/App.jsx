import { useState } from 'react'
import './App.css'
import Login from './Login.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './Register.jsx';
import Reset from "./Reset.jsx";
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
  }

  export default App

{/* 
rules_version = '2';

service firebase.storage {

  match /b/{bucket}/o {

    match /{allPaths=**} {

      allow read, write: if

          request.time < timestamp.date(2023, 5, 11);

    }

  }

}
 */}


