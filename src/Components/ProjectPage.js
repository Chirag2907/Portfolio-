import React from "react";
import "./ProjectPage.css";
import Movieguessr from "./Projects/Movieguessr";
import Textanalyzer from "./Projects/Textanalyzer";

const ProjectPage = (props) => {
  const handleProject2 = (e) => {
    let body = document.querySelector(".body");
    if (!body.classList.contains("active")) {
      // console.log("clicked");
    } else {
      props.func();
    }
  };


  return (
    <div>
      <main onClick={handleProject2} className="project second">
        <div className="project-bookmark rounded text-black">
          <b>PROJECTS</b>
        </div>
        
        <div className="project-inner">
          <div class="projects">
            <Textanalyzer />
            <Movieguessr />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
