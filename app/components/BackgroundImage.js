import React from "react";
import "./BackgroundImage.scss";

function BackgroundImage(props) {
  return (
    <div
      className="BackgroundImage"
      style={{
        "--image": `url(${props.image})`,
        "--opacity": props.opacity
      }}
    />
  );
}

export default BackgroundImage;
