import { EmailIcon } from '@chakra-ui/icons';
import React from 'react';
import { FaGithub, FaHome, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className='left'>
           <div className='location'>
            <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
           
           <div>
            <p> Sai Colony.</p>
            <p> Sihora,Bhandara</p>
           </div>
           </div>
        <div className='phone'>
          <h4>
          <FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem" }}/>+91 7709639271
          </h4>
        </div>
        <div className='email'>
          <h4>
            <a href="mailto:abha25meshram@gmail.com">
          <EmailIcon size={20} style={{color:"#fff" ,marginRight:"2rem" ,}}/>abha25meshram@gmail.com
          </a>
          </h4>
          </div>
        </div>
        <div className='right'>
          <h4>Get in Touch</h4>
          <p>Got a project? Reach out and let's work together 
            on something exciting. Big or small. Mobile or web.</p>
            <div className='social'>
             <a href="https://www.linkedin.com/in/abha-meshram-96b189215/">
            <FaLinkedinIn size={30} style={{color:"#fff" ,marginRight:"2rem"}}/>
            </a>
            <a href="https://github.com/abha2510">
            <FaGithub size={30} style={{color:"#fff" ,marginRight:"2rem"}}/>
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
