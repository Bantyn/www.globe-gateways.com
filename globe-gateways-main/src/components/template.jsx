import React from 'react';
import "../assets/css/template.css";

export default function Template({ title, subTitle, price, image }) {
  return (

    <div className="main-template-container">
      <div className="template-image-container">
        <img src={image} alt={title} />
        <div className="main-title-container">
          <h2 className='main-title'>{title}<p className='sub-title'>{subTitle}</p></h2>
        </div>
        <div className="sub-images-container">
        </div>
      </div>
    </div>
  );
}
