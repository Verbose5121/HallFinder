import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";


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

      <p>
        {" "}
        Title: <b>Hall Finder</b>
      </p>
      <div id="parentScrollDiv" style={{ height: 400, overflow: "auto" }}>
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
          endMessage={<p> Done</p>}
          // height={500}
          scrollableTarget="parentScrollDiv"
        >
          {dataSource.map((item, index) => {
            return (
              <div style={style}>Hall number in #{index + 1} calgary area</div>
            );
          })}
        </InfiniteScroll>
      </div>

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

export default App;

