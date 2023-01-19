import React from "react";
import './ProjectPage.css';

const ProjectPage = (props) => {

  const handleProject2 = (e) => {
    let body = document.querySelector(".body");
    let project = document.querySelector(".project");
    if (project.classList.contains("active-proj") && !body.classList.contains("active")) {
      // console.log("clicked");
    } else {
      props.func();
    }
  };
  return (
    <div>
      <main onClick={handleProject2} className="project second">
      <div className="project-bookmark rounded text-black"><b>PROJECTS</b></div>
        <div className="project-inner">
          <h1>Projects</h1>
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

export default ProjectPage;
