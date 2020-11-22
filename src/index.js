import React from "react";
import ReactDOM from "react-dom";

const fName = "Jed";
const lName = "Black";
const number = 8;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p> Your lucky number is {number}</p>
  </div>,

  document.getElementById("root")
);
