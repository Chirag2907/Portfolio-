import React from 'react'
import { useState, useEffect } from "react";
import guessthemovie from "../../Images/guess-the-movie.png";
import "./Movieguessr.css";


const Movieguessr = () => {
    const [Show, setShow] = useState(false);

    const textAnalyzerClicked = () => {
      setShow(!Show);
    };
    useEffect(() => {
      const iframe = document.createElement("iframe");
      iframe.src = "https://chirag2907.github.io/Guess-the-movie/";
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
          <div onClick={textAnalyzerClicked} class="cardd rounded max-w-sm ">
                <img
                  className="rounded-t w-full"
                  src={guessthemovie}
                  alt="Sunset in the mountains"
                />
                <div class="p-3">
                  <h5 class="ff font-black text-gray-900 text-xl font-medium mb-2 asdasd">
                    <b>Text Analyzer</b>
                  </h5>
                  <p class="ff text-black mb-2 asd">
                    This website analyzes the text you enter and gives you a brief
                    report about the text. The text is also sentimentally
                    analyzed.
                  </p>
                </div>
              </div>
  
              {Show ? (
                <div className="animate-card">
                  <iframe
                    className="rounded-t-lg"
                    width="100%"
                    height="450"
                    src="https://chirag2907.github.io/Guess-the-movie/"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Text Analyzer"
                  ></iframe>
                  <div class="bg-white txtasum rounded-b">
                    <p class="boldd ff text-black">
                      <div>
                        Website:{" "}
                        <a
                          href="https://chirag2907.github.io/guess-the-movie/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          https://chirag2907.github.io/guess-the-movie/
                        </a>
                      </div>
                      <div>
                        GitHub:{" "}
                        <a
                          href="https://github.com/Chirag2907/guess-the-movie"
                          rel="noreferrer"
                          target="_blank"
                        >
                          https://github.com/Chirag2907/guess-the-movie
                        </a>
                      </div>
                    </p>
                  </div>
                </div>
              ) : null}
      </div>
    )
  }

export default Movieguessr