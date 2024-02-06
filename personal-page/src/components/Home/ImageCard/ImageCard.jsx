import React from "react";
import Imagescard from "./Imagescard";
import "./ImageCard.css";

const ImageCard = () => {
  const technologyImage = {
    html: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    css: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    js: "https://i0.wp.com/www.duomimikry.de/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1",
    react:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    docker:
      "https://cdn.iconscout.com/icon/free/png-256/free-docker-3050921-2538289.png",
  };

  return (
    <div className="div-flex">
      {Object.entries(technologyImage).map(([technology, imageUrl], index) => (
        <Imagescard key={index} imageSrc={imageUrl} altText={technology} />
      ))}
    </div>
  );
};

export default ImageCard;
