import { useState } from "react";
import React from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
  };

  return (
    <div className="container my-2">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        About US
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Analyzing a text involves examining its structure, content, and
              style to uncover deeper meanings and intentions. This process
              helps in understanding the author's purpose, themes, and the
              impact on the reader.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Utilis is free to use and offers a range of features to
              enhance and refine your text. From grammar checks to style
              suggestions, this tool provides various functionalities to help
              you polish and improve your writing effortlessly. Explore its
              diverse capabilities to optimize your text and achieve the best
              results.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Interactive UI
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Utilis is free to use and offers a range of features to
              enhance and refine your text, including interactive UI elements
              that make the experience user-friendly and engaging. With tools
              for grammar checks, style suggestions, and more, you can
              effortlessly polish your writing while enjoying an intuitive and
              interactive interface.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
