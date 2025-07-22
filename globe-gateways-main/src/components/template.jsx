import "../assets/css/template.css";
import React, { useRef,useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default function Template({ 
  title, 
  subTitle, 
  price, 
  image, 
  subImages,
  location,
  packageType,
  video,
  includes,
  duration,
  transportation
}) {
  const containerRef = useRef();
  useGSAP(() => {
    gsap.from(".text-animation", {
      y: 90,
      opacity: 0,
      scale:0.9,
      duration: 0.5,
      stagger: true,
      delay:1.0,
      scrollTrigger: {
        trigger: ".text-animation",
        start: "top 80%",
        end: "bottom 40%",
        markers: true,
      },
    });
    gsap.from(".text-animation-2", {
      y: 60,
      opacity: 0,
      duration: 0.5,
      delay:1.3,
      scrollTrigger: {
        trigger: ".text-animation-2",
        start: "top 60%",
        end: "bottom 40%",
        scrub:true,
        // markers: true,
      },
    });
  }, { scope: containerRef }); 

  return (
    <div className="main-template-container" ref={containerRef}>
      <div className="template-image-container">
        <img src={image} alt={title} />
      </div>

      <div className="main-title-container">
        <h2 className="main-title text-animation">{title}</h2>
        <p className="sub-title text-animation-2">{subTitle}</p>
        <br />
      </div>

      <div className="sub-images-container">
        <div className="imageRow">
          {subImages.map((element, index) => (
            <img
              key={index}
              data-scroll
               data-scroll-speed={index % 2 === 0 ? '-6' : '6'}
              data-scroll-direction="horizontal"
              src={element}
            />
          ))}
        </div>
        <div className="locationTitle">
          <h2 className="text-animation-">{location}</h2>
        </div>

        <div className="information">
          <div className="lastVideo">
            <div className="vehical">
                <div className="svg">

                </div>
                <div className="text-content">


                </div>
            </div>
            <div data-scroll data-scroll-speed="3" className="includes">
                <h1 data-scroll data-scroll-speed="1"><i className="bi bi-box-arrow-in-down"> </i> Incudes </h1>
                {includes.map((element, index) => (<p data-scroll data-scroll-speed="1" key="index">{element}</p>))}
                <br />
                <h1 data-scroll data-scroll-speed="1"><i className="bi bi-clock"> </i> Duration</h1>
                <p data-scroll data-scroll-speed="1">{duration}</p>
                <br />
                <h1 data-scroll data-scroll-speed="1"><i className="bi bi-car-front"> </i> Transportation</h1>
                {transportation.map((element, index) => (<p data-scroll data-scroll-speed="1" key="index">{element}</p>))}
            </div>
            

            <div className="book-your">
              <span data-scroll data-scroll-speed="2">B</span>
              <span data-scroll data-scroll-speed="6">o</span>
              <span data-scroll data-scroll-speed="7">o</span>
              <span data-scroll data-scroll-speed="1">k</span>
              <span data-scroll data-scroll-speed="9"><br /></span>
              <span data-scroll data-scroll-speed="4">Y</span>
              <span data-scroll data-scroll-speed="9">o</span>
              <span data-scroll data-scroll-speed="3">u</span>
              <span data-scroll data-scroll-speed="7">r</span><br />
              {packageType}</div>

            <div type="button" className="price-tag">
              <a data-scroll href="#" id="priceTag">
                Booking Starting at {price} /-
              </a>
              <div className="tagLine"></div>
            </div>
          
            <video src={video} muted loop autoPlay></video>
          </div>



        </div>
      </div>
    </div>
  );
}
