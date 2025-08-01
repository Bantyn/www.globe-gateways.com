// import "../assets/css/template.css";
// import React, { useRef,useEffect } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// export default function Template({ 
//   title, 
//   subTitle, 
//   price, 
//   image, 
//   subImages,
//   location,
//   packageType,
//   video,
//   includes,
//   duration,
//   transportation
// }) {
//   const containerRef = useRef();
//   useGSAP(() => {
//     gsap.from(".text-animation", {
//       y: 90,
//       opacity: 0,
//       scale:0.9,
//       duration: 0.5,
//       stagger: true,
//       delay:1.0,
//       scrollTrigger: {
//         trigger: ".text-animation",
//         start: "top 80%",
//         end: "bottom 40%",
//         markers: true,
//       },
//     });
//     gsap.from(".text-animation-2", {
//       y: 60,
//       opacity: 0,
//       duration: 0.5,
//       delay:1.3,
//       scrollTrigger: {
//         trigger: ".text-animation-2",
//         start: "top 60%",
//         end: "bottom 40%",
//         scrub:true,
//         // markers: true,
//       },
//     });
//   }, { scope: containerRef }); 

//   return (
//     <div className="main-template-container" ref={containerRef}>
//       <div className="template-image-container">
//         <img src={image} alt={title} />
//       </div>

//       <div className="main-title-container">
//         <h2 className="main-title text-animation">{title}</h2>
//         <p className="sub-title text-animation-2">{subTitle}</p>
//         <br />
//       </div>

//       <div className="sub-images-container">
//         <div className="imageRow">
//           {subImages.map((element, index) => (
//             <img
//               key={index}
//               data-scroll
//                data-scroll-speed={index % 2 === 0 ? '-6' : '6'}
//               data-scroll-direction="horizontal"
//               src={element}
//             />
//           ))}
          
//         </div>
//         <div className="locationTitle">
//           <h2 className="text-animation-"><i className="bi bi-pin"></i>Location : {location}</h2>
//         </div>

//         <div className="information">
//           <div className="lastVideo">
//             <div className="vehical">
//                 <div className="svg">

//                   {/* SVG here */}
//                 </div>
//                 <div className="text-content">
//                   {/* text-here */}

//                 </div>
//             </div>
//             <div data-scroll data-scroll-speed="3" className="includes">
//                 <h1 data-scroll data-scroll-speed="1"><i className="bi bi-box-arrow-in-down"> </i> Incudes </h1>
//                 {includes.map((element, index) => (<p data-scroll data-scroll-speed="1" key="index">{element}</p>))}
//                 <br />
//                 <h1 data-scroll data-scroll-speed="1"><i className="bi bi-clock"> </i> Duration</h1>
//                 <p data-scroll data-scroll-speed="1">{duration}</p>
//                 <br />
//                 <h1 data-scroll data-scroll-speed="1"><i className="bi bi-car-front"> </i> Transportation</h1>
//                 {transportation.map((element, index) => (<p data-scroll data-scroll-speed="1" key="index">{element}</p>))}
//             </div>

//             <div className="book-your">
//               <div data-scroll data-scroll-speed="-1">Book Your {packageType}</div>
//             </div>
//             <div type="button" className="price-tag">
//               <a data-scroll href="#" id="priceTag">
//                 Booking Starting at {price} /-
//               </a>
//               <div className="tagLine"></div>
//             </div>
          
//             <video src={video} muted loop autoPlay></video>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "../assets/css/template.css";

export default function Template() {
  const containerRef = useRef(null);
  
  const { state } = useLocation();
  const { title,subTitle,price,image,subImages,location,packageType,video,includes,duration,transportation } = state || {};

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1.2,
      class: "is-inview",
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className="main-template-container" data-scroll-container ref={containerRef}>
      <div className="template-image-container" data-scroll>
        <img src={image} alt={title} data-scroll data-scroll-speed="1" />
      </div>

      <div className="main-title-container">
        <h2 className="main-title" data-scroll data-scroll-speed="2">{title}</h2>
        <p className="sub-title" data-scroll data-scroll-speed="1">{subTitle}</p>
      </div>

      <div className="sub-images-container">
        <div className="imageRow">
          {subImages?.map((img, index) => (
            <img
              key={index}
              data-scroll
              data-scroll-speed={index % 2 === 0 ? "-4" : "4"}
              data-scroll-direction="horizontal"
              src={img}
              alt={`sub-${index}`}
            />
          ))}
        </div>

        <div className="locationTitle" data-scroll data-scroll-speed="2">
          <h2>
            <i className="bi bi-pin"></i> Location: {location}
          </h2>
        </div>

        <div className="information">
          <div className="lastVideo">
            <div className="vehical">
              <div className="svg">{/* Optional SVG */}</div>
              <div className="text-content">{/* Optional Description */}</div>
            </div>

            <div className="includes" data-scroll data-scroll-speed="1">
              <h1><i className="bi bi-box-arrow-in-down"> </i> Includes</h1>
              {includes?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}

              <h1><i className="bi bi-clock"> </i> Duration</h1>
              <p>{duration}</p>

              <h1><i className="bi bi-car-front"> </i> Transportation</h1>
              {transportation?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <div className="book-your" data-scroll data-scroll-speed="-1">
              <div>Book Your {packageType}</div>
            </div>

            <div className="price-tag" data-scroll data-scroll-speed="1">
              <a href="#" id="priceTag">
                Booking Starting at {price} /-
              </a>
            </div>

            <video
              src={video}
              muted
              loop
              autoPlay
              data-scroll
              data-scroll-speed="0.8"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}
