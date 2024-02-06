import React from "react";

const Imagescard = ({ imageSrc, altText }) => {
  return (
    <div>
      <img src={imageSrc} alt={altText} style={{ height: "150px" }} />
      <p>{altText}</p>
    </div>
  );
};

export default Imagescard;
