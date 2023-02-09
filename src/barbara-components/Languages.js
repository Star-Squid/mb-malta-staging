import * as React from "react";

export default function Languages(props) {
  let lastLanguage = props.languageArr[props.languageArr.length - 1];
  let languageList = "";

  for (let i = 0; i < props.languageArr.length - 1; i++) {
    languageList = languageList + props.languageArr[i] + " · ";
  }

  return (
    <p className="languages">
      {languageList}
      {lastLanguage}
    </p>
  );
}