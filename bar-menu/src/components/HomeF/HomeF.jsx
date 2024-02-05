import React from "react";

import "./HomeF.css";
import DishF from "./DishF/DishF";

const HomeF = (props) => {
  const dishes = [
    {
      id: 1,
      name: "plato 1",
      description: "Este es el plato 1",
      price: 10,
    },
    {
      id: 2,
      name: "plato 2",
      description: "Este es el plato 2",
      price: 20,
    },
    {
      id: 3,
      name: "plato 3",
      description: "Este es el plato 3",
      price: 15,
    },
  ];
  return (
    <>
      <h2>Menu</h2>
      <div className="home-f-container ">
        {dishes.map((dish) => (
          <DishF
            key={dish.id}
            plateName={dish.name}
            plateDescription={dish.description}
            platePrice={dish.price}
          />
        ))}
      </div>
    </>
  );
};

export default HomeF;
