import React from "react";
import './NavMenu.css';

const NavMenu = (props) => {
  const hoverInHome = (e) => {
    let home = document.querySelector(".home");
    home.classList.add("hover-home");
  };
  const hoverOutHome = (e) => {
    let home = document.querySelector(".home");
    home.classList.remove("hover-home");
  };

  const hoverInProj = (e) => {
    let proj = document.querySelector(".project");
    proj.classList.add("hover-proj");
  };
  const hoverOutProj = (e) => {
    let proj = document.querySelector(".project");
    proj.classList.remove("hover-proj");
  };

  const hoverInAbout = (e) => {
    let about = document.querySelector(".about");
    about.classList.add("hover-about");
  };
  const hoverOutAbout = (e) => {
    let about = document.querySelector(".about");
    about.classList.remove("hover-about");
  };

  const hoverInContact = (e) => {
    let contact = document.querySelector(".contact");
    contact.classList.add("hover-contact");
  };
  const hoverOutContact = (e) => {
    let contact = document.querySelector(".contact");
    contact.classList.remove("hover-contact");
  };
  return (
    <div>
      <nav className="nav-items">
        <div>
          <div
            onClick={props.func1}
            onMouseOver={hoverInHome}
            onMouseOut={hoverOutHome}
            className="custom-card homecard"
          >
            HOME
          </div>
        </div>
        <div>
          <div
            onClick={props.func2}
            onMouseOver={hoverInProj}
            onMouseOut={hoverOutProj}
            className="custom-card projcard"
          >
            PROJECTS
          </div>
        </div>
        <div>
          <div
            onClick={props.func3}
            onMouseOver={hoverInAbout}
            onMouseOut={hoverOutAbout}
            className="custom-card aboutcard"
          >
            ABOUT
          </div>
        </div>
        <div>
          <div
            onClick={props.func4}
            onMouseOver={hoverInContact}
            onMouseOut={hoverOutContact}
            className="custom-card contactcard"
          >
            CONTACT
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
