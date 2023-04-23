import { useState } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
const style = {
  border: "2px solid purple",
  margin: 12,
  padding: 8,
};

const App = () => {
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
    <div className="App">
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
    </div>
  );
};

export default App;

