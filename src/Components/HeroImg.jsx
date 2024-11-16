import "./HeroImgStyle.css";
import heroImg from "../assests/herogif.gif"
import React from 'react'
import {HiOutlineHandRaised} from "react-icons/hi2";
import resume from "../assests/Abha_Meshram_Resume.pdf"
import {BsDownload} from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import bg from "../assests/bg.gif";


const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img"
        src={bg} alt="hero"/>
      </div>
      <div className="content">
  
        <p>HI, <HiOutlineHandRaised className="swing"/>  
        I'M ABHA MESHRAM</p>
        <h1>FULL STACK WEB DEVELOPER.</h1>
        <div className="box">
            {/* <p><a href="#project" className="btn" >Projects</a></p> */}
          <p className="social"> <a 
             onClick={()=>{
              window.open("https://www.linkedin.com/in/abhameshram/","blank")
             }}>
            <FaLinkedinIn size={30} style={{color:"#2832C2" ,marginRight:"2rem"}}/>
            </a>
            <a 
            onClick={()=>{
              window.open("https://github.com/abha2510","blank")
            }}>
            <FaGithub size={30} style={{color:"#fff" ,marginRight:"2rem"}}/>
            </a>
            </p>
           
           
            <p><a 
            onClick={()=>{
              window.open(
                "https://drive.google.com/file/d/1LS7hUXYOm3_yEavUw8srfk2nqRbNvaCZ/view?usp=sharing","blank"
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
