import { React } from "react";
import $ from 'jquery';
export default function navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
            <div className="nav-logo">Globe Gateways <span className="bi-vertical-bar">|</span></div>
            <div className="nav-items">
              <div className="nav-links"><a href="#">Leatest Articales</a><span className="bi-vertical-bar">|</span></div>
              <div className="nav-links"><a href="#">Photo Of The Day</a><span className="bi-vertical-bar">|</span></div>
              <div className="nav-links"><a href="#">About Us</a><span className="bi-vertical-bar">|</span></div>
            </div>
        </div>

        <div className="nav-right">
            <div className="nav-links"><a href="#">subscribe</a><span className="bi-vertical-bar">|</span></div>
            <div><i className="bi bi-search"></i><span className="bi-vertical-bar">|</span></div>
            <div><i className="bi bi-list-nested"></i></div>





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
