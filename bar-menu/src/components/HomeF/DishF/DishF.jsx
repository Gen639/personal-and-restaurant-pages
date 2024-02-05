import React from "react";
import "./DishF.css";

const DishF = (props) => {
  return (
    <div className="dish-f-card">
      <h2>{props.plateName}</h2>
      <p>{props.plateDescription}</p>
      <p>Price: {props.platePrice} EUR</p>
    </div>
  );
};

export default DishF;
