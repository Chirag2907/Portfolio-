import React from "react";
import "./AboutPage.css";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
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
          <TagCloud className="text-sphere text-xl text-purple-400"
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(650, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
        })}
        onClickOptions={{ passive: true }}
    >
        {[
          "C",
          "C++",
          "Python",
          "JavaScript",
          "React JS",
          "Node JS",
          "Next JS",
          "Git",
          "HTML",
          "CSS",
          "Bootstrap",
          "Tailwind CSS",
          "Firebase",
          "Linux",
          "Canva",
          "Figma",
          "npm",

        ]}
    </TagCloud>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
