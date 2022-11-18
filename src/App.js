import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.YanaFedchenko.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yana Fedchenko
          </a>{" "} and is{" "}
          <a
            href="https://github.com/YanaFedchenko/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourse on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
