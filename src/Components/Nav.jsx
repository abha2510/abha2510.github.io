import React from 'react';
import "./NavStyles.css"
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import resume from "../assests/Abha-Meshram-Resume.pdf"


const Nav = () => {
  const [click,setClick]=useState(false);
  const handleClick=()=>setClick(!click);
 const [color,setColor]=useState(false);

 const changeColor=()=>{
  if(window.scrollY >=100){
    setColor(true)
  }else{
    setColor(false)
  }
 };
window.addEventListener("scroll",changeColor)
  return (
    <>    
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
        <h1 className='name'>Abha</h1>
      </Link>
      <ul className={click?"nav-menu active":"nav-menu"}>
        <li>
      <Box onClick={handleClick}><a href="#" color='white'>Home</a></Box>
       </li>
        <li>
        <Box onClick={handleClick}><a href="#about" color='white'>About Me</a></Box>
        </li>
        <li>
        <Box onClick={handleClick}><a href="#skills" color='white'>Skills</a></Box>
        </li>
        <li>
        <Box onClick={handleClick}><a href="#project" color='white'>Projects</a></Box>
        </li>
        <li>
        <Box onClick={handleClick}><a href="#contact" color='white'>Contact</a></Box>
        </li>
        <li>
        <Box><a 
         onClick={()=>{
          window.open(
            "https://drive.google.com/file/d/1Uw8qUiTmnN3Jeg3LKeH05zyCtB1IYTEZ/view","blank"
          )
        }}
        href={resume}
        download="Abha-Meshram-Resume"
        >Resume</a></Box>
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click?(<FaTimes size={20} style={{color:"#fff"}}/>):
           
           (<FaBars size={20} style={{color:"#fff"}}/>)
          }
      </div>
    </div>
    </>
  )
}

export default Nav
