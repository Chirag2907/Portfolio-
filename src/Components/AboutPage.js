import React from "react";
import "./AboutPage.css";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
const AboutPage = (props) => {
  const handleAbout2 = (e) => {
    let body = document.querySelector(".body");
    if (!body.classList.contains("active")) {
      // console.log("first");
    } else {
      props.func();
    }
  };

  const letterBounce = (x) => {
    let letter = document.querySelector("." + x);
    if (letter.classList.contains("jelly")) {
      return;
    }
    letter.classList.add("jelly");
    setTimeout(() => {
      letter.classList.remove("jelly");
    }, 1000);
  };
  let a = "aaa",
    b = "bbb",
    c = "ccc",
    d = "ddd",
    e = "eee",
    f = "ffff",
    g = "ggg",
    h = "hhh",
    i = "iii",
    j = "jjj",
    k = "kkk";

  const connect = () => {
    props.func2();
  };

  return (
    <div>
      <main onClick={handleAbout2} className="about third">
        <div className="about-bookmark rounded">
          <b>ABOUT</b>
        </div>
        <div className="about-inner">
          <div className="headingtitle text-6xl text-purple-400">
            <span onMouseOver={() => letterBounce(a)} className="letter aaa">
              M
            </span>
            <span onMouseOver={() => letterBounce(b)} className="letter bbb">
              e
            </span>
            <span onMouseOver={() => letterBounce(c)} className="letter ccc">
              ,
            </span>
            <span>{"\u00A0"}</span>

            <span onMouseOver={() => letterBounce(d)} className="letter ddd">
              M
            </span>
            <span onMouseOver={() => letterBounce(e)} className="letter eee">
              y
            </span>
            <span onMouseOver={() => letterBounce(f)} className="letter ffff">
              s
            </span>
            <span onMouseOver={() => letterBounce(g)} className="letter ggg">
              e
            </span>
            <span onMouseOver={() => letterBounce(h)} className="letter hhh">
              l
            </span>
            <span onMouseOver={() => letterBounce(i)} className="letter iii">
              f
            </span>
            <span>{"\u00A0"}</span>
            <span onMouseOver={() => letterBounce(j)} className="letter jjj">
              &
            </span>
            <span>{"\u00A0"}</span>
            <span onMouseOver={() => letterBounce(k)} className="letter kkk">
              I
            </span>
          </div>
          <div className="ff abouttext">
            <p>
              I am a sophomore at the Netaji Subhas University of Technology. I
              am passionate about learning new technologies and applying them to
              solve real world problems.
            </p>
            <p>
              I am a self taught full-stack web developer and a competitive
              programmer. I have a knack for problem solving which helps me come
              up with creative solutions to problems.
            </p>
            <h1 className="mobile">SKILLS</h1>
            <p className="mobile-only">
              <span className="titlee">Langauges:</span> C, C++, Python, JavaScript <br/>
              <span className="titlee">Web Development:</span> HTML, CSS, ReactJS, NextJs, Bootstrap, TailwindCSS, mySQL, Google Firebase <br/>
              <span className="titlee">Miscellaneous:</span> Canva, Figma, Linux, Git <br/>
            </p>
            <p></p>
            <span
              onClick={connect}
              className="connect text-purple-400 tracking-wider text-xl"
            >
              Let's connect!
            </span>
          </div>
          <TagCloud
            className="ff font-bold text-sphere text-xl text-purple-400"
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
              maxSpeed: "fast",
            })}
          >
            {[
              "C",
              "C++",
              "Python",
              "JavaScript",
              "ReactJS",
              "NodeJS",
              "NextJS",
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
