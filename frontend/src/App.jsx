import React, { useRef, useEffect, useState } from 'react';
import Map from './map';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Reset from "./Reset";
import HallPage from "./HallPage";
import EventPage from "./EventPage";
import UserProfile from "./UserProfile";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  border: "2px solid purple",
  margin: 12,
  padding: 8,
};

function App() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    console.log('datasource', dataSource)
    if (dataSource.length < 200) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Map />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/viewhall" element={<HallPage />} />
          <Route exact path="/userprofile" element={<UserProfile />} />
          <Route exact path="/viewevent" element={<EventPage />} />

        </Routes>
      </Router>
  
          </div>
        );
      }

export default App;

