import "../assets/css/template.css";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP,ScrollTrigger);



export default function Template({ title, subTitle, price, image, subImages }) {
  useGSAP(()=>{
  gsap.from(".text-animation",{
  y:30,
  opacity:0,
  duration:0.5,
  stagger:0.3,
  scrollTrigger:{
    trigger:".main-title",
    start:"top 70%",
    end:"bottom 30%",
    markers:true
  }
  })
  })
  return (
    <div className="main-template-container">
      <div className="template-image-container">
        <img src={image} alt={title} />
      </div>

      <div className="main-title-container">
        <h2 className="main-title text-animation">{title}</h2>
        <p className="sub-title text-animation">{subTitle}</p>
        <br />
        <button type="button" className="price-tag">Book Start at {price} /-</button>
      </div>

      <div className="sub-images-container">

        {/* Optional: Add extra content or images */}

      </div>
    </div>
  );
};
