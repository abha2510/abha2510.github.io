
import React from 'react'
import "./AboutStyle.css";
import no from "../assests/no.png";
import { Box } from '@chakra-ui/react';
import {FaUserAlt} from "react-icons/fa"
import { Rotate } from 'react-reveal';

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
   <Rotate top right>  
    <div className='left'>
      <h1 style={{color:'#7eadfc'}}><FaUserAlt className='bounce2'/>  Who Am I?</h1>
      <p className='detail'>
      {/* <img className='developer' src="https://readme-typing-svg.herokuapp.com?color=F26B8A&center=true&lines=Full+Stack+Web+Developer" alt="img"/> */}
        Passionate skilled in MERN stack with expertise in problem-solving and attention to detail. Skilled in frontend development using Angular and Bootstrap, with hands-on experience in both. Committed to continuous learning and staying updated on the latest web trends to enhance development efficiency and quality.</p>
     
      <p><a href="#contact" className="btn" >Contact</a></p>
     
    </div>
    </Rotate>
    </div>
    </Box>
    </div>
  )
  
}

export default About





