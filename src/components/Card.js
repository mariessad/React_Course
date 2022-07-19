import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../${props.card.coverImg}`} className="card--img" alt="" />
      <div className="card--stats">
        <img src="../red_star.png" className="card--star" />
        <span>{props.card.stats.rating}</span>
        <span className="gray">({props.card.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.card.title}</p>
      <p className="card--price">
        <span className="bold">${props.card.price}</span> / person
      </p>
    </div>
  );
}
