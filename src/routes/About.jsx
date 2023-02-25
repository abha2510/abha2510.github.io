
import React from 'react'
import "./AboutStyle.css";
import no from "../assests/no.png";
import { Box } from '@chakra-ui/react';
import {FaUserAlt} from "react-icons/fa"

//#F26B8A
const About = () => {
  return (
    <div>
    <Box className='about' id="about">
    <div className='abt'>
    <div className='right'>
      <div className='img-container'>
        <div className='img-stack top'>
       <img src={no} alt="abha" className='img' />
       </div>
      </div>
   </div>
    <div className='left'>
      <h1 style={{color:'#F26B8A'}}><FaUserAlt className='bounce2'/>  Who Am I?</h1>
      <p className='detail'>I am a 
     
      <img className='developer' src="https://readme-typing-svg.herokuapp.com?color=F26B8A&center=true&lines=Full+Stack+Web+Developer" alt="img"/>
        <br/>

        Disciplined, hard-working, and ambitious Web Developer.  
        1200+ hours of coding and solved more than 200+ DSA questions.
        Looking forward to utilizing my current skillset and experience of working 
        on projects to create a mark in the Web Developer position and achieve 
        organizational goals.</p>
     
      <p><a href="#contact" className="btn" >Contact</a></p>
     
    </div>
    
    </div>
    </Box>
    </div>
  )
  
}

export default About





