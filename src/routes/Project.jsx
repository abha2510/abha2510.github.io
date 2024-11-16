import { Box } from '@chakra-ui/react'
import React from 'react';
import "./ProjectStyle.css";
import classy from "../assests/classy.png";
import {FaNodeJs, FaReact} from "react-icons/fa"
import {SiChakraui, SiExpress} from "react-icons/si";
import {FaHtml5} from "react-icons/fa";
import {SiJavascript,SiRedux} from "react-icons/si";
import {FaCss3Alt} from "react-icons/fa";
import travel from "../assests/travel.png";
import Roll from 'react-reveal/Roll';
import yt from "../assests/yt.png"
import mealdb from "../assests/mealdb.png"
import hotstar from "../assests/hotstar.png"
import {VscProject} from "react-icons/vsc";
import digital from "../assests/digital.png";
import { DiMongodb, DiPython } from 'react-icons/di';
import quicksell from "../assests/quicksell.png";
import influencer from "../assests/influencer.png";

const Project = () => {
  return (
    <div>
     <Box className='project' id="project" color={"white"}>
     <h1 style={{textAlign:"center" ,color:"#7eadfc"}}><VscProject className='bounce2'/>  PROJECTS</h1>
   {/* <span className='bar1'></span>
   */}
    <div className='project'>
    
      <div className='card-container'>

      <div className='card'>
          <img src={quicksell} alt="quicksell"  className='card-img'/>
         
          <h1 className='name'>QuickSell</h1>
          <span className='bar'></span>
         <p>Experience a platform inspired by OLX, designed to streamline the buying and selling process for users.
         </p>
         <h3 className='techstack'> TechStacks:</h3>
         <div className='icon'>
         <Roll down>
        <div style={{color:"green",fontSize:20 }}>
        <DiMongodb/>
        <h6>MongoDB</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"white",fontSize:20 }}>
        <SiExpress/>
        <h6>Express</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"#00ffff",fontSize:20}}>
        <FaReact/>
        <h6>React</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"#74b72e",fontSize:20 }}>
        <FaNodeJs/>
        <h6>Node</h6>
        </div>
        </Roll>
        </div>
         <div className="button">
         <p><a href="https://github.com/abha2510/Quicksell_MERN" target="_blank" className="btn" >GitHub</a></p>
         <p><a href="https://quick-sell-frontend-nine.vercel.app/" target="_blank" className="btn btn-light">Live</a></p>
        </div>
        </div>


      <div className='card'>
          <img src={digital} alt="digitalXpress" className='card-img'/>
         
          <h1 className='name'>Digital Xpress</h1>
          <span className='bar'></span>
         <p>Digital Xpress is one of the leading online shopping websites in
           India for electronic products, home & kitchen appliances etc.
         </p>
         <h3 className='techstack'> TechStacks:</h3>
         <div className='icon'>
        <Roll down>
        <div style={{color:"#AF69EF",fontSize:20 }}>
        <SiRedux/>
        <h6>Redux</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"#00ffff",fontSize:20}}>
        <FaReact/>
        <h6>React</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:20}}>
        <SiJavascript/>
        <h6>JS</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"#00cdcd",fontSize:20}}>
        <SiChakraui/>
        <h6>ChakraUI</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"blue",fontSize:20}}>
        <FaCss3Alt/>
        <h6>CSS</h6>
        </div>
        </Roll>
        </div>
         <div className="button">
         <p><a href="https://github.com/abha2510/relianceDigital_clone" target="_blank" className="btn" >GitHub</a></p>
         <p><a href="https://reliance-digital-beryl.vercel.app/" target="_blank" className="btn btn-light">Live</a></p>
        </div>
        </div>
     
        <div className='card'>
          <img src={influencer} alt="influencer" className='card-img'/>
         
          <h1 className='name'>Parent Influencer</h1>
          <span className='bar'></span>
         <p>The parent influencer is a chatbot that mimics YouTube influencers to influence parents regarding their children's problems.
         </p>
         <h3 className='techstack'> TechStacks:</h3>
         <div className='icon'>
         <Roll down>
        <div style={{color:"green",fontSize:20 }}>
        <DiMongodb/>
        <h6>MongoDB</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"white",fontSize:20 }}>
        <SiExpress/>
        <h6>Express</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"#00ffff",fontSize:20}}>
        <FaReact/>
        <h6>React</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"#74b72e",fontSize:20 }}>
        <FaNodeJs/>
        <h6>Node</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:20 }}>
        <DiPython/>
        <h6>Python</h6>
        </div>
        </Roll>
        </div>
         <div className="button">
         <p><a href="https://github.com/abha2510/influencer_frotend" target="_blank" className="btn" >GitHub</a></p>
         <p><a href="https://influencer-frotend.vercel.app/" target="_blank" className="btn btn-light">Live</a></p>
        </div>
        </div>
        <div className='card'>
          <img src={yt} alt="youtube" className='card-img'/>
         
          <h1 className='name'>YouTube</h1>
          <span className='bar'></span>
         <p>Enjoy the videos and music you love, upload original content and share it all with friends, family and the world on YouTube. 
         </p>
         <h3 className='techstack'> TechStacks:</h3>
         <div className='icon'>
        <Roll down>
        <div style={{color:"orangered",fontSize:20}}>
        <FaHtml5/>
        <h6>HTML</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:20}}>
        <SiJavascript/>
        <h6>JS</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"blue",fontSize:20}}>
        <FaCss3Alt/>
        <h6>CSS</h6>
        </div>
        </Roll>
        </div>
         <div className="button">
         <p><a href="https://github.com/abha2510/YouTube" target="_blank" className="btn" >GitHub</a></p>
         <p><a href="https://golden-alpaca-d81e7d.netlify.app/" target="_blank" className="btn btn-light">Live</a></p>
        </div>
        </div>
        <div className='card'>
          <img src={travel} alt="traveladvisor" className='card-img'/>
        
          <h1 className='name'>Traveladvisor</h1>
          <span className='bar'></span>
         <p>Traveladvisor offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants.</p>
         <h3 className='techstack'> TechStack:</h3>
         <div className='icon'>
       <Roll down>
        <div style={{color:"orangered",fontSize:20}}>
        <FaHtml5/>
        <h6>HTML</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:20}}>
        <SiJavascript/>
        <h6>JS</h6>
        </div>
        </Roll>
        <Roll>
        <div style={{color:"blue",fontSize:20}}>
        <FaCss3Alt/>
        <h6>CSS</h6>
        </div>
        </Roll>
        </div>
        <div className="button">
         <p><a href="https://github.com/abha2510/Trip_Advisor_Clone" target="_blank" className="btn" >GitHub</a></p>
         <p><a href="https://stalwart-fox-86b96a.netlify.app/" target="_blank" className="btn btn-light">Live</a></p>
         </div>
        </div>

        <div className='card'>
          <img src={mealdb} alt="MealDb" className='card-img'/>
         
          <h1 className='name'>TheMealDB</h1>
          <span className='bar'></span>
         <p>TheMealDB is an application that can assist you with finding food in an emergency. 
         </p>
         <h3 className='techstack'> TechStacks:</h3>
         <div className='icon'>
        <Roll down>
        <div style={{color:"orangered",fontSize:20}}>
        <FaHtml5/>
        <h6>HTML</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:20}}>
        <SiJavascript/>
        <h6>JS</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"blue",fontSize:20}}>
        <FaCss3Alt/>
        <h6>CSS</h6>
        </div>
        </Roll>
        </div>
         <div className="button">
         <p><a href="https://github.com/abha2510/MealDB" target="_blank" className="btn" >GitHub</a></p>
         <p><a href="https://radiant-cassata-09184b.netlify.app/" target="_blank" className="btn btn-light">Live</a></p>
        </div>
        </div>

        <div className='card'>
          <img src={hotstar} alt="hotstar" className='card-img'/>
         
          <h1 className='name'>HotStar</h1>
          <span className='bar'></span>
         <p>Enjoy the videos and music you love, upload original content and share it all with friends, family and the world on YouTube. 
         </p>
         <h3 className='techstack'> TechStacks:</h3>
         <div className='icon'>
        <Roll down>
        <div style={{color:"orangered",fontSize:20}}>
        <FaHtml5/>
        <h6>HTML</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:20}}>
        <SiJavascript/>
        <h6>JS</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"blue",fontSize:20}}>
        <FaCss3Alt/>
        <h6>CSS</h6>
        </div>
        </Roll>
        </div>
         <div className="button">
         <p><a href="https://github.com/abha2510/HotStar" target="_blank" className="btn" >GitHub</a></p>
         <p><a href="https://boisterous-babka-ce6d06.netlify.app/" target="_blank" className="btn btn-light">Live</a></p>
        </div>
        </div>

      </div>
    </div>
    </Box>
    </div>
    
  )
}

export default Project
