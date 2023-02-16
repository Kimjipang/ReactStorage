import React from "react";
import "../App.css";

export default function Project(props) {
  // const [textValue, setTextValue] = useState("");

  // const onChangeText = (event) => {
  //   setTextValue(event.target.value);
  // };

  return (
    <div className="container">
      <h4>{props.projectName}</h4>
      <article>{props.description}</article>
      <a>{props.status}</a>
      {/* <textarea
        placeholder=""
        value={textValue}
        onChange={onChangeText}
      ></textarea> */}
      {/* <hr /> */}
      {/* <p className="paragraph">text : {textValue}</p> */}
    </div>
  );
}
