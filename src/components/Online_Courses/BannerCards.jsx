import React from "react";

function BannerCards(props) {
  return (
    <div className="col-lg">
      <img className="mb-3" src={props.img} alt="woman" />
      <h6 className="font-weight-bold text-white">{props.label}</h6>
      <small className="text-white online-classes">
        {props.text1} <br />
        {props.text2}
      </small>
    </div>
  );
}

export default BannerCards;
