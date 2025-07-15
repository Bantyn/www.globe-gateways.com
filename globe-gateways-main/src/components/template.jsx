import React from 'react';
import "../assets/css/template.css";

export default function Template({ title, subTitle, price, image,subImages }) {
  return (
    <div className="main-template-container">
      <div className="template-image-container">
        <img src={image} alt={title} />
      </div>

      <div className="main-title-container">
        <h2 className="main-title">{title}</h2>
        <p className="sub-title">{subTitle}</p>
        {/* You can also display price here if needed */}
        <p className="price-tag">Book Start at {price} /-</p>
      </div>

      <div className="sub-images-container">

        {/* Optional: Add extra content or images */}

      </div>
    </div>
  );
};
