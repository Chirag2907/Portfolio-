import React from "react";
import "./AboutPage.css";

const AboutPage = (props) => {
  
  const handleAbout2 = (e) => {
    let about = document.querySelector(".about");
    if (about.classList.contains("active-about")) {
      // console.log("first");
    } else {
      props.func();
    }
  };

  return (
    <div>
      <main onClick={handleAbout2} className="about third">
      <div className="about-bookmark rounded text-black"><b>ABOUT</b></div>
        <div className="about-inner">
          <h1>About</h1>
          <span className="content"></span>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            minima.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
