import "../assets/css/template.css";
import React, { useRef,useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';


gsap.registerPlugin(ScrollTrigger);

export default function Template({ title, subTitle, price, image, subImages,location}) {
  const containerRef = useRef();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp:0.4,
      smartphone: {
        // smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  useGSAP(() => {
    gsap.from(".text-animation", {
      y: 90,
      opacity: 0,
      scale:0.9,
      duration: 0.5,
      stagger: true,
      scrollTrigger: {
        trigger: ".main-title",
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
    gsap.from(".text-animation-2", {
      y: 60,
      opacity: 0,
      duration: 0.5,
      // delay:0.7,
      scrollTrigger: {
        trigger: ".main-title",
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });



    
  }, { scope: containerRef }); // Ensures scoped selector targeting within component

  return (
    <div className="main-template-container" ref={containerRef}  data-scroll-container>
      <div className="template-image-container">
        <img src={image} alt={title} />
      </div>

      <div className="main-title-container">
        <h2 className="main-title text-animation">{title}</h2>
        <p className="sub-title text-animation-2">{subTitle}</p>
        <br />
      </div>

      <div className="sub-images-container">
        {/* Optional: Add extra content or images */}
        <div className="imageRow">
          {subImages.map((element, index) => (
            <img key={index} data-scroll data-scroll-speed="9" data-scroll-direction="horizontal" src={element} />
          ))}
          </div>
          <div className="locationTitle"><h2>{location}</h2></div>
        <button type="button" className="price-tag">Book Start at {price} /-</button>

      </div>
    </div>
  );
}
