import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    if (text.length === 0) {
      props.showAlert("Enter text to Convert!", "warning");
      return;
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    if (text.length === 0) {
      props.showAlert("Enter text to Convert!", "warning");
      return;
    }
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };
  const CapitalizedCase = () => {
    if (text.length === 0) {
      props.showAlert("Enter text to Capitalize!", "warning");
      return;
    }
    const newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("Capitalized!", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();

    navigator.clipboard
      .writeText(text.value)
      .then(() => {
        console.log("Text copied to clipboard");
        props.showAlert("Text Copied to clipboard!", "success");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        props.showAlert("Failed to copy text!", "danger");
      });
  };

  const handleSpClick = (event) => {
    setText(text.replace(/\s+/g, ""));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.text}</h1>
        <div className="MY-BOX my-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-2  my-2  "
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleSpClick}>
          Remove Spaces
        </button>
        <button
          className="btn btn-primary mx-2 my-2 "
          onClick={CapitalizedCase}
        >
          Capitalize Case
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters and {text.split(".").length - 1}{" "}
          sentences
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview"}</p>
      </div>
    </>
  );
}
