import "./HeroImgStyle.css";
import heroImg from "../assests/hero.png"
import React from 'react'
import {HiOutlineHandRaised} from "react-icons/hi2"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img"
        src={heroImg} alt="hero"/>
      </div>
      <div className="content">
        <p>HI, <HiOutlineHandRaised className="swing"/>  I'M ABHA MESHRAM</p>
        <h1>FULL STACK WEB DEVELOPER.</h1>
        <div className="box">
            <p><a href="#project" className="btn" >Projects</a></p>
          
            <p><a href="#contact" className="btn btn-light">Contact</a></p>
           
        </div>
      </div>
    </div>
  )
}

export default HeroImg
