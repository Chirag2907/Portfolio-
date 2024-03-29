import React from "react";
import { useState} from "react";
import guessthemovie from "../../Images/weather.webp";
import "./Weather.css";

const Weather = () => {
  const [Show, setShow] = useState(false);

  const textAnalyzerClicked = () => {
    setShow(!Show);
  };

  return (
    <div>
      {Show ? (
        <div onClick={textAnalyzerClicked} className="blurMe"></div>
      ) : null}
      <div onClick={textAnalyzerClicked} class="cardd rounded max-w-sm ">
        <img
          loading="lazy"
          className="rounded-t w-full"
          src={guessthemovie}
          width={100}
          alt="Sunset in the mountains"
        />
        <div className="p-3">
          <h5 className="ff font-black text-gray-900 text-xl font-medium mb-2 fontweight">
            <b>Weather Forecast</b>
          </h5>
          <p className="ff text-black mb-2 whitefont">
            A website that shows the weather of any city in the world. It uses
            the OpenWeatherMap API to fetch a 5 day forecast of the city.
          </p>
        </div>
      </div>

      {Show ? (
        <div className="animate-card-weather">
          <iframe
            loading="lazy"
            className="rounded-t-lg"
            width="100%"
            height="450"
            src="https://chirag2907.github.io/weather-forecast/"
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
                    "https://chirag2907.github.io/weather-forecast/",
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
                    "https://github.com/Chirag2907/weather-forecast/",
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

export default Weather;
