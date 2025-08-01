import React, { useState,useEffect } from 'react'
import '../assets/css/profile.css'
export default function account() {
    useEffect()
    const [a,seta] = useState("")
    const greater = () => {
      seta()
    }
    
    
  return (
   <>
    <div className="profileContainer">
      <div className="mainProfileContainer">
        <div className="imgContainer">

        </div>
        <div className="detailsContainer">
            <h1>{a}</h1>
            <button onClick={greater}>Check</button>
            {}
        </div>
      </div>
    </div>   
   
   
   </> 
  )
}
