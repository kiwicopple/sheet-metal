import React from "react";
import "./Divider.scss";

function Divider(props) {
  return <div className={`Divider has-background-${props.color}`} />;
}

export default Divider;
