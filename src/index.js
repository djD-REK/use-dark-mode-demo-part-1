import React, { useState } from "react";
import ReactDOM from "react-dom";
import useDarkMode from "use-dark-mode"; // Don't forget to import the NPM package use-dark-mode

import "./styles.scss";

function App() {
  const darkMode = useDarkMode(false);

  const getDayNightAsString = () => {
    if (darkMode.value) return "🌕 Night";
    else return "☀️ Day";
  };

  const emojify = () => {
    return (
      <h1>
        <span role="img" aria-label="Decorative Emojis">
          ⭐️❤️☕🍍☄⛱⛷☀️☘️
        </span>
      </h1>
    );
  };

  return (
    <div className="App">
      <div className="container">
        {emojify()}
        <h2>{getDayNightAsString()} Mode 🥳</h2>
        <button onClick={darkMode.toggle}>
          <h3>Toggle Day / Night</h3>
        </button>
        {emojify()}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
