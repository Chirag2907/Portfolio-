import React from 'react'
import { useState, useEffect } from "react";
import guessthemovie from "../../Images/guess-the-movie.webp";
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
                  width={100}
                  alt="Sunset in the mountains"
                />
                <div className="p-3">
                  <h5 className="ff font-black text-gray-900 text-xl font-medium mb-2 fontweight">
                    <b>Movie Guessr</b>
                  </h5>
                  <p className="ff text-black mb-2 whitefont">
                    This is a simple game where you have to guess the movie name letter by letter.
                    The movies are fetched from an API.
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
                  
                  <div className="bg-white txtasum rounded-b">
                  <div className="but ff text-black">
                    <div className="gotoweb" onClick={()=>window.open('https://chirag2907.github.io/Guess-the-movie/', '_blank')}>
                      Visit Website
                    </div>
                    <div className="gotoweb" onClick={()=>window.open('https://github.com/Chirag2907/Guess-the-movie/', '_blank')}>
                      Go to Github
                    </div>
                  </div>
                  </div>
                </div>
              ) : null}
      </div>
    )
  }

export default Movieguessr