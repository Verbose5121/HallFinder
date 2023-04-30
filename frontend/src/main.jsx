import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Login2 from "./Login2";
import LoginIcon from "@mui/icons-material/Login";
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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
          <li>
            <a className="nav-item" href="login">
              Sign in
            </a>
          </li>
        </ul>
      </nav> <Tooltip title="Login"><a alt="Login" className="nav-item" href="login" style={{marginRight:"40px"}}>
            <LoginIcon fontSize="large" />
            </a></Tooltip> 
    </div>
    <App />
  </React.StrictMode>
);
