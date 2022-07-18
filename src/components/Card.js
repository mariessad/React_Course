import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../${props.img}`} className="card--img" alt="" />
      <div className="card--stats">
        <img src="../red_star.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">${props.price}</span> / person
      </p>
    </div>
  );
}
