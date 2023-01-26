import * as React from "react";

export default function Button(props) {
  return (
    <button
      name={props.name}
      type={props.type}
      className={props.primary ? "pushable primary" : "pushable"}
    >
      <span role="presentation" className="shadow"></span>
      <span role="presentation" className="edge"></span>
      <span className="frontbtn" role="button">
        {" "}
        {props.text}{" "}
      </span>
    </button>
  );
}
