import React from "react";
import './NavBar.css'

const NavBar = (props) => {
  const handleHamburger = (e) => {
    let body = document.querySelector(".body");

    if (!body.classList.contains("active")) {
      body.classList.add("active");
    } else {
      body.classList.remove("active");
    }
  };
  return (
    <div>
      <header>
        <div className="wrapper">
          <div onClick={props.func} className="logo">
            Chirag Agarwal
          </div>

          <div onClick={handleHamburger} className="hamburger">
            <div className="line l1"></div>
            <div className="line l2"></div>
            <div className="line l3"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
