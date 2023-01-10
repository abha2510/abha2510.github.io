import React from 'react';
import "./NavStyles.css"
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import resume from "../assests/Abha_Meshram_Resume.pdf"

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
        <h1><ChevronLeftIcon style={{fontSize:"40",color:"#F26B8A"}}/>Abha <span style={{color:"#F26B8A"}}>/</span>
        <ChevronRightIcon style={{fontSize:"40",marginLeft:"-8",color:"#F26B8A"}}/></h1>
      </Link>
     
      <ul className={click?"nav-menu active":"nav-menu"}>
        <li>
        <Box><a href="#" color='white'>Home</a></Box>
       </li>
        <li>
        <Box><a href="#about" color='white'>About Me</a></Box>
        </li>
        <li>
        <Box><a href="#skills" color='white'>Skills</a></Box>
        </li>
        <li>
        <Box><a href="#project" color='white'>Projects</a></Box>
        </li>
        <li>
        <Box><a href="#contact" color='white'>Contact</a></Box>
        </li>
        <li>
        <Box><a href="https://drive.google.com/file/d/1Twy6kX4myuQuOISug1Egws0iTErwxg9v/view?usp=sharing" download="true">Resume</a></Box>
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
