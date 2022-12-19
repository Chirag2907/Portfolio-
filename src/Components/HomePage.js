import React from "react";
import "./HomePage.css";
import pic from "./pic.jpeg";
import github from "./github.png"
import linkedin from "./linkedin.png"
import insta from "./instagram.png"


const HomePage = (props) => {
  const handleHome2 = (e) => {
    let home = document.querySelector(".home");
    if (home.classList.contains("active-home")) {
    } else {
      props.func();
    }
  };

  return (
    <div>
      
      <main onClick={handleHome2} className="home">
        <div className="home-inner">
          <div className="textt">
            <h1 className="title text-7xl mt-5">
              <span className="letter">H</span>
              <span className="letter">e</span>
              <span className="letter">l</span>
              <span className="letter">l</span>
              <span className="letter">o</span>
              <span className="letter">!</span>
              <span>{'\u00A0'}</span>
              <span className="letter text-purple-400">I</span>
              <span className="letter text-purple-400">'</span>
              <span className="letter text-purple-400">m</span>
              <span>{'\u00A0'}</span>
              <span className="letter text-purple-400">C</span>
              <span className="letter text-purple-400">h</span>
              <span className="letter text-purple-400">i</span>
              <span className="letter text-purple-400">r</span>
              <span className="letter text-purple-400">a</span>
              <span className="letter text-purple-400">g</span>
            </h1>

            <h4 className="text-3xl text-purple-400">
              A web developer & Competitive Programmer{" "}
            </h4>
            <div className="text-xl  desc">
              I am a sophomore at Netaji Subhas University of Technology,
              pursuing bachelors in Information Technology. I'm a full-stack web developer
              and a competitive programmer.

            </div>

            <div className="flex gap-4 icons mt-5 justify-center w-50">
              <img className="links" onClick={()=>window.open('https://github.com/Chirag2907', '_blank')} src={github} width={40}  alt="img"/>
              <img className="links" onClick={()=>window.open('https://www.linkedin.com/in/chirag-agarwal2907/', '_blank')} src={linkedin} width={40} alt="img"/>
              <img className="links" onClick={()=>window.open('https://www.instagram.com/chirag.2907/', '_blank')} src={insta} width={40}  alt="img"/>
            </div>
          </div>
          <img className="border pfp rounded" src={pic} width={250} alt="pic" />
          <div className="rectangle border-solid border-2 border-purple-400  h-96 w-60"></div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
