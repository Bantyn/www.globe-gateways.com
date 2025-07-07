import { React } from "react";
import $ from "../assets/js/jquery";
export default function navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <div className="nav-logo">Globe Gateways <span className="bi-vertical-bar">|</span></div>
          
        </div>
        <div className="nav-right">
          <div>
            <i className="bi bi-search"></i>
          </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
