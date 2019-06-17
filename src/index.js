import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://orangevalleycaa.org/api/videos").then(
        response => response.json()
      );
      setData(result);
    };
    fetchData();
  }, []); //Only when the component mount thanks to empty array as second argument
  return (
    <div className="App">
      <header>
        <h1>Videos</h1>
      </header>
      {data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url} />
        </div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
