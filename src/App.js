import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Abhishek-singh-007/Klimate">
          Download Source Code
        </a>
        {""}| Developed by{" "}
        <a target="_blank" href="https://my-portfolio-six-tau-59.vercel.app/">
          Abhishek Singh
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://my-portfolio-six-tau-59.vercel.app/">
          AbhiTech
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
