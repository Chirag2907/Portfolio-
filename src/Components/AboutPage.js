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
    f = "fff",
    g = "ggg",
    h = "hhh",
    i = "iii",
    j = "jjj",
    k = "kkk";

  return (
    <div>
      <main onClick={handleAbout2} className="about third">
        <div className="about-bookmark rounded text-black">
          <b>ABOUT</b>
        </div>
        <div className="about-inner">
          <div className="headingtitle text-purple-400">
            <span onMouseOver={() => letterBounce(a)} className="letter aaa">
              M
            </span>
            <span onMouseOver={() => letterBounce(b)} className="letter bbb">
              e
            </span>
            <span onMouseOver={() => letterBounce(c)} className="letter ccc">
              ,
            </span>
            <span>{'\u00A0'}</span>

            <span onMouseOver={() => letterBounce(d)} className="letter ddd">
              M
            </span>
            <span onMouseOver={() => letterBounce(e)} className="letter eee">
              y
            </span>
            <span onMouseOver={() => letterBounce(f)} className="letter fff">
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
            <span>{'\u00A0'}</span>
            <span onMouseOver={() => letterBounce(j)} className="letter jjj">
              &
            </span>
            <span>{'\u00A0'}</span>
            <span onMouseOver={() => letterBounce(k)} className="letter kkk">
              I
            </span>
          </div>

          <TagCloud
            className="text-sphere text-xl text-purple-400"
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
              "Bootstrap" ,
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
