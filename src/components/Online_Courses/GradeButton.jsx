import React from "react";

function GradeButton(props) {
  return (
    <button className={`btn ${props.bgColor} grades text-dark font-weight-light`}>
      Grades {props.grades}
    </button>
  );
}

export default GradeButton;
