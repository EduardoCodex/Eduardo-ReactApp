import React from "react";
import "./button.css";

export default function Button(props) {

  const [ colorState, setColorState] =  React.useState();

  const styleButton = {
    padding: props.padding,
    backgroundColor: colorState,
  };

  function handleClick(evt) {
    // colorState  = "grey";
    setColorState("grey")
  }
  return (
    <button onClick={ handleClick }  className="btn">
      {props.children}
    </button>
  );
}
