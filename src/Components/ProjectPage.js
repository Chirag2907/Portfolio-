import React from "react";
import "./ProjectPage.css";
import textAnalyzer from "../Images/text-analyzer.png";

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
          <h1>Projects</h1>

          <div class="m-4">

            <div class="cardd rounded bg-white max-w-sm ">
              <img class="rounded-t w-full" src={textAnalyzer} alt="Sunset in the mountains" />
              {/* <iframe
                width="100%"
                height="250"
                src="https://chirag2907.github.io/Text-Analyzer/"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="Text Analyzer"
              ></iframe> */}
              <div class="p-3">
                <h5 class="ff font-black text-gray-900 text-xl font-medium mb-2">
                  <b>Text Analyzer</b>
                </h5>
                <p class="ff text-black mb-2">
                  This website analyzes the text you enter and gives you a brief
                  report about the text. The text is also sentimentally analyzed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
