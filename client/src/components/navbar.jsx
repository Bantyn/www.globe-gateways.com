import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React, { useState, useRef, useEffect } from "react"
import {Link} from 'react-router-dom'
gsap.registerPlugin(useGSAP)

export default function Navbar() {
  useGSAP(() => {
    gsap.from(".nav-links,.nav-logo,.nav-icons", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
    })
  })

  const [menuOpen, setMenuOpen] = useState(false)
  const [searchBarVisible, setSearchBarVisible] = useState(false)
  const searchBarRef = useRef(null)

  useEffect(() => {
    if (searchBarVisible) {
      gsap.fromTo(searchBarRef.current, 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      )
    } else {
      gsap.to(searchBarRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in'
      })
    }
  }, [searchBarVisible])

  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <div><Link to="/" className="nav-logo">Globe Gateways</Link></div>
          <span className="bi-vertical-bar">|</span>
          <div className={`nav-items ${menuOpen ? "show" : ""}`}>
            <div className="nav-links">
              <Link to="/articals"><i className='bi bi-image' style={{ fontSize: ".8rem", marginRight: ".3rem" }}></i>Latest Articles</Link>
              <span className="rLine"></span>
              <span className="lLine"></span>
            </div>
            <span className="bi-vertical-bar">|</span>
            <div className="nav-links">
              <Link to="/photoofday"><i className='bi bi-camera2' style={{ fontSize: ".8rem", marginRight: ".3rem" }}></i> Photo Of The Day</Link>
              <span className="rLine"></span>
              <span className="lLine"></span>
            </div>
            <span className="bi-vertical-bar">|</span>
            <div className="nav-links">
              <Link to="/about"><i className='bi bi-people' style={{ fontSize: ".8rem", marginRight: ".3rem" }}></i> About Us</Link>
              <span className="rLine"></span>
              <span className="lLine"></span>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-icons" onClick={() => setSearchBarVisible(!searchBarVisible)}>
            <i className="bi bi-search"></i>
          </div>
          <span className="bi-vertical-bar">|</span>
          <div className="nav-links">
            <Link to="/account"><i className='bi bi-person-fill' style={{ fontSize: ".8rem", marginRight: ".2rem" }}></i>Account</Link>
            <span className="rLine"></span>
            <span className="lLine"></span>
          </div>
          <span className="bi-vertical-bar">|</span>
          <div className="nav-icons nav-links" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="bi bi-list-nested"></i>
          </div>
        </div>
      </div>
      {/* Search Bar */}
      <div
        ref={searchBarRef}
        style={{
          position: "fixed",
          bottom: "10px",
          left: 0,
          width:"50vw",
          right: 0,
          padding: "1rem",
          background: "#ffffff10",
          backdropFilter:"blur(5px)",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
          display: searchBarVisible ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
          margin:"auto",
          zIndex: 999,
          borderRadius:"50px"
        }}
      >
        <input
          type="text"
          placeholder="Search here..."
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            flex: "1",
            maxWidth: "400px",
            width:"90%",
          }}
        />
        <button className="btn btn-primary" type='search' id="search">Search</button>
      </div>
    </>
  )
}
