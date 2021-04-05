import React from "react";
import Avater from "./Avatar";
import DetailInfo from "./DetailInfo";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avater img={props.imgURL} />
      </div>
      <div className="bottom">
        <DetailInfo info={props.name} />
        <DetailInfo info={props.email} />
      </div>
    </div>
  );
}

export default Card;
