import React from "react";

const Imagescard = ({ imageSrc, altText }) => {
  return (
    <div>
      <img
        src={imageSrc}
        alt={altText}
        style={{ width: "100px", height: "100px" }}
      />
      <p>{altText}</p>
    </div>
  );
};

export default Imagescard;
