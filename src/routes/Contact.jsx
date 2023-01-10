import { EmailIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react'
import React from 'react';
import { FaGithub, FaHome, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import "./ContactStyle.css";
import Zoom from 'react-reveal/Zoom';


const Contact = () => {
  return (
    <div>
      <Box className='contact' id="contact">
      <div className='contactDetail'>
      <Zoom bottom>
      <div className='le'>
      <h1 className='conthead'>CONTACT</h1>
   <span className='ba'></span>
           <div className='location'>
            <FaHome size={20} style={{color:"#4285F4" ,marginRight:"2rem"}}/>          
           <div>
            <p> Sai Colony.</p>
            <p> Sihora,Bhandara</p>
           </div>
           </div>
        <div className='phone'>
          <h4>
          <FaPhone size={20} style={{color:"#34A853" ,marginRight:"2rem" }}/>+91 7709639271
          </h4>
        </div>
        <div className='email'>
          <h4>
            <a href="mailto:abha25meshram@gmail.com">
          <EmailIcon size={20} style={{color:"#EA4335" ,marginRight:"2rem" ,}}/>abha25meshram@gmail.com
          </a>
          </h4>
          </div>
          <h4 className='get'>Get in Touch</h4>
          <p>Got a project? Reach out and let's work together<br/> 
            on something exciting. Big or small. Mobile or web.</p>
            <div className='social'>
             <a href="https://www.linkedin.com/in/abha-meshram-96b189215/">
            <FaLinkedinIn size={30} style={{color:"#2832C2" ,marginRight:"2rem"}}/>
            </a>
            <a href="https://github.com/abha2510">
            <FaGithub size={30} style={{color:"#fff" ,marginRight:"2rem"}}/>
            </a>
            </div>
        </div>
        </Zoom>
        </div>
        </Box>
    </div>
  )
}

export default Contact

