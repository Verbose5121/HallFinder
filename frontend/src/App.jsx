import React, { useRef, useEffect, useState, useContext } from 'react';
import Map from './map';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login2 from "./Login2";
import Reset from "./Reset";
import HallPage from "./HallPage";
import EventPage from "./EventPage";
import InfiniteScroll from "react-infinite-scroll-component";
import { AuthProvider } from './components/auth';
import HomeIcon from '@mui/icons-material/Home';
import "./index.css";
import ReactDOM from "react-dom/client";
import { AuthContext } from "./components/auth";
import LoginIcon from './components/LoginIcons';
import LogoutIcon from './components/LogoutIcons';
import UserProfile from './user/UserProfile';


const style = {
  border: "2px solid purple",
  margin: 12,
  padding: 8,
};

function App() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(()=>{
    if(localStorage.getItem("user")!="undefined" && null){
      const a = JSON.parse(localStorage.getItem("user"));
      console.log(a.uid);
      setCurrentUser(a);
      }
  },[]);
 

  return (
    <>
    <div className="abc">
      <a width="300px"
        height="80px"
        style={{ margin: "auto 40px" }} href="/">

      <img
        src="src/images/HallFinder-1 (6).png"
        width="300px"
        height="80px"
        style={{ margin: "auto 40px" }}
      /></a>
      <nav>
        <ul>
          <li>
            <a className="nav-item" href="/"><HomeIcon fontSize="medium" style={{marginTop:"-5px"}}>
              Home</HomeIcon>
            </a>
          </li>
          <li>
            <a className="nav-item" href="#">
              Events
            </a>
          </li>
          <li>
            <a className="nav-item" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav-item" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
     {!currentUser ?<LoginIcon />:<LogoutIcon currentUser = {currentUser} />}
    </div>
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Map />} />
          <Route exact path="/login" element={<Login2 />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/viewhall" element={<HallPage />} />
          
          <Route exact path="/viewevent" element={<EventPage />} />
          <Route exact path="/profile" element={<UserProfile />} />

        </Routes>
      </Router>
          </div>
          </>
        );
      }

export default App;

