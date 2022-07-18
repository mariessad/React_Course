import React from "react";

export default function Card() {
  return (
    <div className="card--div">
      <div className="card">
        <img src="../image_12.png" className="card--img" alt="" />
        <div className="card--stats">
          <img src="../red_star.png" className="card--star" />
          <span>5.0</span>
          <span className="gray">(6) •</span>
          <span className="gray">USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </div>
  );
}
