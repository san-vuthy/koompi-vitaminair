import React from "react";
import "./home.css";
function Home() {
  return (
    <>
      <img className="cloud" src="/images/cloud2.png" alt="cloud" />
      <img className="cloud2" src="/images/cloud2.png" alt="cloud" />
      <img className="cloud3" src="/images/cloud2.png" alt="cloud" />
      <div className="home">
        <div className="text">
          <h2>In search of</h2>
          <h1 className="header">The Next Small Things</h1>
          <p>Protect, preserve and restore our rain</p>
          <p>forests for generation ahead.</p>
        </div>
        <div className="video">
          <video src="/video.mp4" autoPlay loop muted preload="none"></video>
        </div>
      </div>
      <h1 id="num">22,616,989</h1>
      <img style={{ width: "100%" }} src="/images/big-header.png" alt="" />
    </>
  );
}

export default Home;
