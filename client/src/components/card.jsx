import React from 'react'
import '../assets/css/card.css'
import { useNavigate } from "react-router-dom";
export default function card(props) {

  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/main", {
      state: {
        image: props.image,
        title: props.title,
        price: props.price,
        location: props.location,
        duration: props.duration,
        packageType: props.packageType,
        subImages: props.subImages,
        includes: props.includes,
        transportation: props.transportation,
        video: props.video
      }
    });
  };

  return (
    <>
      {/* <div className="card-body">
        <div className="card-items">
          <div className="card-img"><img src={props.image} alt="" /></div>
          <div className="card-img"><h2>Package Name : {props.title}</h2></div>
          <div className="card-img"><img src={props.image} alt="" /></div>
          <div className="card-img"><img src={props.image} alt="" /></div>
        </div>
      </div> */}

      <div className="card-body">
        <div className="card-items">

          {/* Main Image */}
          <div className="card-img">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="card-title">
              <h2>Package Name</h2>
              <p>{props.title}</p>
              <h2>Location</h2>
              <p>{props.location}</p>
          </div>
          <div className="card-duration">
              <h2>Duration</h2><p>{props.duration}</p>
              <h2>Package Type</h2><p>{props.packageType}</p>
          </div>
          <div className="card-price">
              <h2>price</h2><p>{props.price}</p>
          </div>
          <button className="card-btn" onClick={handleBookNow}>
              Details<i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  )
}
