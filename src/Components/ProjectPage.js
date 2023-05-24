import React from "react";
import "./ProjectPage.css";
import Movieguessr from "./Projects/Movieguessr";
import Textanalyzer from "./Projects/Textanalyzer";
import Weather from "./Projects/Weather";

const ProjectPage = (props) => {
  const handleProject2 = (e) => {
    let body = document.querySelector(".body");
    if (!body.classList.contains("active")) {
      // console.log("clicked");
    } else {
      props.func();
    }
  };

  const letterBounce = (x) => { 
    let letter = document.querySelector("."+x);
    if(letter.classList.contains('jelly')){
      return;
    }
    letter.classList.add('jelly');
    setTimeout(() => {
      letter.classList.remove('jelly');
    }, 1000);
   }
   let a="aag", b="bbg", c="ccg", e="eeg", f="fffg", h="hhg", i="iig", j="jjg";
  return (
    <div>
      <main onClick={handleProject2} className="project second">
        <div className="project-bookmark rounded">
          <b>PROJECTS</b>
        </div>
          <h1 className="text-purple-400 ff font-bold  mt-10 h-16 font-mono heading">
          <span onMouseOver={()=>letterBounce(a)} className="letter aag">P</span>
          <span onMouseOver={()=>letterBounce(b)} className="letter bbg">R</span>
          <span onMouseOver={()=>letterBounce(c)} className="letter ccg">O</span>
          <span onMouseOver={()=>letterBounce(e)} className="letter eeg">J</span>
          <span onMouseOver={()=>letterBounce(f)} className="letter fffg">E</span>
          <span onMouseOver={()=>letterBounce(j)} className="letter jjg">C</span>
          <span onMouseOver={()=>letterBounce(h)} className="letter hhg">T</span>
          <span onMouseOver={()=>letterBounce(i)} className="letter iig">S</span>
        </h1>
        <div className="project-inner">
          <div className="projects">
            <div className="show"></div>
            <Textanalyzer />
            <Movieguessr />
            <Weather />
            <div className="dummy"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
