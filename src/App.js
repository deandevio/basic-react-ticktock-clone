import React, { useEffect, useState } from "react";
import Video from "./Video";
import "./App.css";

const API_URL = "https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json";

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="app">
      <div className="container">
        {/* TODO: Loop over the API_URL data and render Video component */}
        {/* TODO: Make sure to assign the correct URL for each video */}
        <Video url="https://github.com/codedamn-classrooms/tiktok-react-material/raw/main/v1.mp4" />
      </div>
    </div>
  );
}
