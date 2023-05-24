import React from "react";
import { useState, useEffect } from "react";
import textAnalyzer from "../../Images/text-analyzer.webp";
import "./Textanalyzer.css";

const Textanalyzer = (props) => {
  const [Show, setShow] = useState(false);

  const textAnalyzerClicked = () => {
    setShow(!Show);
  };
  useEffect(() => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://chirag2907.github.io/Text-Analyzer/";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  return (
    <div>
      {Show ? (
        <div onClick={textAnalyzerClicked} className="blurMe"></div>
      ) : null}
      <div onClick={textAnalyzerClicked} className="cardd rounded max-w-sm ">
        <img
          loading="lazy"
          className="rounded-t w-full"
          src={textAnalyzer}
          width={100}
          alt="Sunset in the mountains"
        />
        <div className="p-3">
          <h5 className="ff font-black text-gray-900 text-xl font-medium mb-2 fontweight">
            <b>Text Analyzer</b>
          </h5>
          <p className="ff text-black mb-2 whitefont">
            This website analyzes the text you enter and gives you a brief
            report about the text. The text is also sentimentally analyzed.
          </p>
        </div>
      </div>

      {Show ? (
        <div className="showcard">
          <iframe
            loading="lazy"
            className="rounded-t-lg"
            width="100%"
            height="450"
            src="https://chirag2907.github.io/Text-Analyzer/"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Text Analyzer"
          ></iframe>
          <div className="bg-white txtasum rounded-b">
            <div className="but ff text-black">
              <div
                className="gotoweb"
                onClick={() =>
                  window.open(
                    "https://chirag2907.github.io/Text-Analyzer/",
                    "_blank"
                  )
                }
              >
                Visit Website
              </div>
              <div
                className="gotoweb"
                onClick={() =>
                  window.open(
                    "https://github.com/Chirag2907/Text-Analyzer/",
                    "_blank"
                  )
                }
              >
                Go to Github
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Textanalyzer;
