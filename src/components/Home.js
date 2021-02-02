import React from "react";

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
          <p>
            Protect, preserve and restore our rain forests for generation ahead.
          </p>
        </div>
        <div className="video">
          <video src="/video.mp4" autoPlay loop muted preload="none"></video>
        </div>
      </div>

      <h1 id="num">22,616,989</h1>
      <img style={{ width: "100%" }} src="/images/big-header.png" alt="" />
      <form className="form">
        <h2>JOIN #TEAMVITAMINAIR!</h2>
        <p>$1 plants a tree</p>
        <button>5 Trees</button>
        <button>20 Trees</button>
        <br />
        <button>50 Trees</button>
        <button>100 Trees</button>
        <br />
        <input type="text" placeholder="Other Amount" />
      </form>
    </>
  );
}

export default Home;
