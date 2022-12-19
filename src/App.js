import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import ProjectPage from "./Components/ProjectPage";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import NavBar from "./Components/NavBar";
import NavMenu from "./Components/NavMenu";
import { useEffect } from "react";

function App() {
  let body, home, proj, about, contact;
  const SelectQueries = () => {
    body = document.querySelector(".body");
    home = document.querySelector(".home");
    proj = document.querySelector(".project");
    about = document.querySelector(".about");
    contact = document.querySelector(".contact");
  };

  const handleHome = () => {
    SelectQueries();
    body.classList.remove("active");
    about.classList.remove("active-about");
    contact.classList.remove("active-contact");
    proj.classList.remove("active-proj");
    home.classList.add("active-home");
  };
  const handleProject = () => {
    SelectQueries();
    body.classList.toggle("active");
    home.classList.remove("active-home");
    about.classList.remove("active-about");
    contact.classList.remove("active-contact");
    proj.classList.add("active-proj");
  };

  const handleAbout = () => {
    SelectQueries();
    body.classList.remove("active");
    contact.classList.remove("active-contact");
    proj.classList.remove("active-proj");
    home.classList.remove("active-home");
    about.classList.add("active-about");
  };

  const handleContact = () => {
    SelectQueries();
    body.classList.remove("active");
    proj.classList.remove("active-proj");
    home.classList.remove("active-home");
    about.classList.remove("active-about");
    contact.classList.add("active-contact");
  };
  useEffect(() => {
    var cursor = document.querySelector(".cursor");
    var cursorinner = document.querySelector(".cursor2");
    var a = document.querySelectorAll("a");

    document.addEventListener("mousemove", function (e) {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    });

    document.addEventListener("mousedown", function () {
      cursor.classList.add("click");
      cursorinner.classList.add("cursorinnerhover");
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("click");
      cursorinner.classList.remove("cursorinnerhover");
    });

    a.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursor.classList.add("hover");
      });
      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
      });
    });
  }, []);

  return (
    <div className="body">
      <div class="cursor"></div>
      <div class="cursor2"></div>
      <NavBar func={handleHome}/>
      <NavMenu func1={handleHome} func2={handleProject} func3={handleAbout} func4={handleContact} />

      <ContactPage func={handleContact}/>
      <AboutPage func={handleAbout}/>
      <ProjectPage func={handleProject}/>
      <HomePage func={handleHome}/>
      
    </div>
  );
}

export default App;
