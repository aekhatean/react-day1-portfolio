import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function RangeSkills(props) {
  return (
    <div className="mb-3">
      <div>{props.title}</div>
      <ProgressBar
        now={props.proficiency}
        label={props.proficiency}
      ></ProgressBar>
    </div>
  );
}
