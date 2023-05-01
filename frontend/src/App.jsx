import React, { useRef, useEffect, useState } from 'react';
import Map from './map';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Login2 from "./Login2";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import InfiniteScroll from "react-infinite-scroll-component";
import { AuthProvider } from './components/auth';

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
      <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Map />} />
          <Route exact path="/login" element={<Login2 />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      </AuthProvider>
          </div>
        );
      }

export default App;

