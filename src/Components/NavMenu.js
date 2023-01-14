import React from "react";
import './NavMenu.css';

const NavMenu = (props) => {
  const hoverInHome = (e) => {
    let home = document.querySelector(".home");
    if(home.classList.contains("first")) home.classList.add("hover-first");
    else if(home.classList.contains("second")) home.classList.add("hover-second");
    else if(home.classList.contains("third")) home.classList.add("hover-third");
    else if(home.classList.contains("fourth")) home.classList.add("hover-fourth");
  };
  const hoverOutHome = (e) => {
    let home = document.querySelector(".home");
    home.classList.remove("hover-first");
    home.classList.remove("hover-second");
    home.classList.remove("hover-third");
    home.classList.remove("hover-fourth");
  };

  const hoverInProj = (e) => {
    let proj = document.querySelector(".project");
    if(proj.classList.contains("first")) proj.classList.add("hover-first");
    else if(proj.classList.contains("second")) proj.classList.add("hover-second");
    else if(proj.classList.contains("third")) proj.classList.add("hover-third");
    else if(proj.classList.contains("fourth")) proj.classList.add("hover-fourth");
  };
  const hoverOutProj = (e) => {
    let proj = document.querySelector(".project");
    proj.classList.remove("hover-first");
    proj.classList.remove("hover-second");
    proj.classList.remove("hover-third");
    proj.classList.remove("hover-fourth");
  };

  const hoverInAbout = (e) => {
    let about = document.querySelector(".about");
    if(about.classList.contains("first")) about.classList.add("hover-first");
    else if(about.classList.contains("second")) about.classList.add("hover-second");
    else if(about.classList.contains("third")) about.classList.add("hover-third");
    else if(about.classList.contains("fourth")) about.classList.add("hover-fourth");
  };
  const hoverOutAbout = (e) => {
    let about = document.querySelector(".about");
    about.classList.remove("hover-first");
    about.classList.remove("hover-second");
    about.classList.remove("hover-third");
    about.classList.remove("hover-fourth");
  };

  const hoverInContact = (e) => {
    let contact = document.querySelector(".contact");
    if(contact.classList.contains("first")) contact.classList.add("hover-first");
    else if(contact.classList.contains("second")) contact.classList.add("hover-second");
    else if(contact.classList.contains("third")) contact.classList.add("hover-third");
    else if(contact.classList.contains("fourth")) contact.classList.add("hover-fourth");
  };
  const hoverOutContact = (e) => {
    let contact = document.querySelector(".contact");
    contact.classList.remove("hover-first");
    contact.classList.remove("hover-second");
    contact.classList.remove("hover-third");
    contact.classList.remove("hover-fourth");
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
