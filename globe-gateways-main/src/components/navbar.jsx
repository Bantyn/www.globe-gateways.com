import { React } from "react";
import $ from 'jquery';
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
gsap.registerPlugin(useGSAP);

export default function navbar(props) {
  // useGSAP(()=>{
  //   gsap.from(".nav-links,.nav-logo,.nav-icons",{
  //     y:30,
  //     opacity:0,
  //     duration:0.5,
  //     stagger:.1
  //   })
  // })

  return (
    <>
      <div className="navbar">
        <div className="nav-left">
            <div className="nav-logo">Globe Gateways <span className="bi-vertical-bar">|</span></div>
            <div className="nav-items">
              <div className="nav-links"><a href="#">Leatest Articales</a><span className="rLine"></span><span className="lLine"></span></div>
              <span className="bi-vertical-bar">|</span>
              <div className="nav-links"><a href="#">Photo Of The Day</a><span className="rLine"></span><span className="lLine"></span></div>
              <span className="bi-vertical-bar">|</span>
              <div className="nav-links"><a href="#">About Us</a><span className="rLine"></span><span className="lLine"></span></div>
              <span className="bi-vertical-bar">|</span>
            </div>
        </div>
        <div className="nav-right">
            <div className="nav-links"><a href="#">subscribe</a><span className="rLine"></span><span className="lLine"></span></div>
            <span className="bi-vertical-bar">|</span>
            <div className="nav-icons"><i className="bi bi-search "></i></div>
            <span className="bi-vertical-bar">|</span>
            <div className="nav-icons nav-links"><a href="#"><i className="bi bi-list-nested "></i></a></div>
{/* 
          <div>
            <i className="bi bi-person-fill"></i>
          </div>
          <div>
            <i className="bi bi-facebook"></i>
          </div>
          <div>
            <i className="bi bi-whatsapp"></i>
          </div>
          <div>
            <i className="bi bi-chevron-left"></i>
          </div>
          <div>
            <i className="bi bi-bookmark"></i>
          </div>
          <div>
            <i className="bi bi-bookmark-fill"></i>
          </div>
          <div>
            <i className="bi bi-chat-left-text-fill"></i>
          </div>
          <div>
            <i className="bi bi-arrow-up-right"></i>
          </div>
          <div>
            <i className="bi bi-emoji-heart-eyes"></i>
          </div> */}


        </div>
      </div>
    </>
  );
}
