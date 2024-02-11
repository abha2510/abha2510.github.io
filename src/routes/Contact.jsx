import { EmailIcon } from '@chakra-ui/icons';
import { Box, Input } from '@chakra-ui/react'
import React from 'react';
import { FaGithub, FaHome, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import "./ContactStyle.css";
import Zoom from 'react-reveal/Zoom';
import {IoMdContacts} from "react-icons/io"


const Contact = () => {
  return (
    <div>
      <Box className='contact' id="contact">
      <div>
      <div className='contactDetail'>
      {/* <Zoom bottom> */}
      <div className='le'>
      <h1 style={{color: "#7eadfc",marginTop: "-10px"}}><IoMdContacts/> CONTACT</h1>
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
            
            <a onClick={()=>{
              window.open("mailto:abha25meshram@gmail.com","blank")
            }} >
          <EmailIcon size={20} style={{color:"#EA4335" ,marginRight:"2rem" ,}}/>abha25meshram@gmail.com
          </a>
          </h4>
          </div>
          <h4 className='get'>Get in Touch</h4>
          <p>Got a project? Reach out and let's work together<br/> 
            on something exciting. Big or small. Mobile or web.</p>
            <div className='social'>
             <a 
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
            </div>
        </div>
        {/* </Zoom> */}
        </div>
        </div>
        </Box>    
    </div>
  )
}

export default Contact

