import "./HeroImgStyle.css";
import heroImg from "../assests/hee.webp"
import React from 'react'
import {HiOutlineHandRaised} from "react-icons/hi2";
import resume from "../assests/Abha-Meshram-Resume.pdf"
import {BsDownload} from "react-icons/bs"

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
          
            <p><a 
            onClick={()=>{
              window.open(
                "https://drive.google.com/file/d/1PRHIJs7HNQ_56XHijAIZhx70i8yLNfXH/view?usp=sharing","blank"
              )
            }}
            href={resume}
            download="Abha-Meshram-Resume"
            className="btn btn-light"><BsDownload/><span style={{marginLeft:"10px"}}>Resume</span></a></p>
           
        </div>
      </div>
    </div>
  )
}

export default HeroImg
