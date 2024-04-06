import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //  console.log("btn clicked "+text);
    if (text.length === 0) {
      props.showAlert("Please enter some text!", "danger");
    } else {
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showAlert("Converted to UpperCase!", "success");
    }
  };
  const handlelowClick = () => {
    //  console.log("btn clicked "+text);
    let newtext = text.toLowerCase();
    setText(newtext);
    console.log(textBold);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleboldClick = () => {
    //  console.log("btn clicked "+text);
    let newtext = text;
    setText(newtext);
    if (textBold === "normal") {
      setTextBold("bold");
    } else {
      setTextBold("normal");
    }
    console.log(textBold);
  };
  const handleitalicClick = () => {
    //  console.log("btn clicked "+text);
    let newtext = text;
    setText(newtext);
    if (textItalic === "normal") {
      setTextItalic("italic");
    } else {
      setTextItalic("normal");
    }
    console.log(textBold);
  };
  const handleOnChange = (event) => {
    // console.log("text changed");
    setText(event.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
  };
  const handleExtraSpace = () => {
    let text_opt = text.split(/[ ]+/);
    setText(text_opt.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };
  let wc = 0;
  const wordCount = () => {
    if (text.length > 0) {
      for (let i = 0; i < text.length - 1; i++) {
        //Counts all the spaces present in the string
        //It doesn't include the first space as it won't be considered as a word
        if (text[i] === " " && isLetter(text.charAt(i + 1)) && i > 0) {
          wc++;
        }
      }
      wc++;
    }
    return wc;
  };
  const isLetter = (c) => {
    return c.toLowerCase() !== c.toUpperCase();
  };
  let myStyle = {
    color: props.mode === "light" ? "black" : "white",
  };
  const [text, setText] = useState("Set Text Here2");
  const [textBold, setTextBold] = useState("normal");
  const [textItalic, setTextItalic] = useState("normal");
  return (
    <>
      <div className="container" style={{ ...myStyle }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              fontWeight: textBold,
              fontStyle: textItalic,
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-3" onClick={handlelowClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn1 btn-primary mx-2"
          value={textBold}
          onClick={handleboldClick}
          style={{ fontWeight: textBold }}
        >
          B
        </button>
        <button
          className="btn2 btn-primary mx-2"
          value={textBold}
          onClick={handleitalicClick}
          style={{ fontStyle: textItalic }}
        >
          I
        </button>
        <button
          className="btn btn-primary mx-2"
          value={textBold}
          onClick={handleCopy}
        >
          CopyText
        </button>
        <button
          className="btn btn-primary mx-2"
          value={textBold}
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{ ...myStyle }}>
        <h2>Your Text Summary</h2>

        <p>
          {wordCount()} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
