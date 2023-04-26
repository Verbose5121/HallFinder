import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="abc">
      <img
        src="src/images/HallFinder-1 (6).png"
        width="300px"
        height="80px"
        style={{ margin: "auto 40px" }}
      />
      <nav>
        <ul>
          <li>
            <a className="nav-item" href="#">
              Home
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
    </div>
    <App />
  </React.StrictMode>
);
