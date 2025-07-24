import React from 'react'
import '../assets/css/card.css'
export default function card(props) {
  return (
    <>
      <div className="card-body">
        <div className="card-items">
          <div className="card-img"><img src={props.image} alt="" /></div>
        </div>
      </div>
    </>
  )
}
