import React from "react";

function TechStackCard(props) {
  return (
    <div className="col-lg mx-2 card-tech-stack bg-white">
        <img
            src={props.img}
            alt="Web Development"
        />
        <p className="tex-dark mt-4 font-weight-light">{props.name}</p>
    </div>
  );
}

export default TechStackCard;
