import { Box } from '@chakra-ui/react'
import React from 'react';
import "./ProjectStyle.css";
import classy from "../assests/classy.png";
import {FaReact} from "react-icons/fa"
import {SiChakraui} from "react-icons/si";
import {FaHtml5} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";
import {FaCss3Alt} from "react-icons/fa";
import travel from "../assests/travel.png";
import crick from "../assests/crick.png";
import Roll from 'react-reveal/Roll';
import yt from "../assests/yt.png"
import mealdb from "../assests/mealdb.png"
import hotstar from "../assests/hotstar.png"
import {VscProject} from "react-icons/vsc"

const Project = () => {
  return (
    <div>
     <Box className='project' id="project" color={"white"}>
     <h1 style={{marginLeft:"43%" ,color:"#F26B8A"}}><VscProject className='bounce2'/>  PROJECTS</h1>
   <span className='bar1'></span>
  
    <div className='project'>
    
      <div className='card-container'>
        <div className='card'>
          <img  src={classy} alt="classyattire" />
         
          <h1 className='name'>Classy Attire</h1>
          <span className='bar'></span>
         <p>Classy Attire as a trendy, youthful and vibrant store, Classy Attire offers consumers an enjoyable shopping experience.</p>
       <div className='icon'>
       <Roll down>
        <div style={{color:"#00ffff",fontSize:30 , marginLeft:"-20px"}}>
        <FaReact/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"#00cdcd",fontSize:30}}>
        <SiChakraui/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"orangered",fontSize:30}}>
        <FaHtml5/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:30}}>
        <SiJavascript/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"blue",fontSize:30}}>
        <FaCss3Alt/>
        </div>
      </Roll>
        </div>
         <div className="button">
         <p><a href="https://github.com/abha2510/elite-passenger-6126" className="btn" >GitHub</a></p>
         <p><a href="https://classy-attire.vercel.app/" className="btn btn-light">Live</a></p>
         </div>
        </div>
       

        <div className='card'>
          <img src={travel} alt="traveladvisor" />
        
          <h1 className='name'>Traveladvisor</h1>
          <span className='bar'></span>
         <p>Traveladvisor offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants.</p>
         <div className='icon'>
       <Roll down>
        <div style={{color:"orangered",fontSize:30}}>
        <FaHtml5/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:30}}>
        <SiJavascript/>
        </div>
        </Roll>
        <Roll>
        <div style={{color:"blue",fontSize:30}}>
        <FaCss3Alt/>
        </div>
        </Roll>
        </div>
        <div className="button">
         <p><a href="https://github.com/dkpradhan99/jumpy-sound-9573" className="btn" >GitHub</a></p>
         <p><a href="https://stalwart-fox-86b96a.netlify.app/" className="btn btn-light">Live</a></p>
         </div>
        </div>
      
     
        <div className='card'>
          <img src={crick} alt="crickinfo" />
         
          <h1 className='name'>ESPN cricinfo</h1>
          <span className='bar'></span>
         <p>ESPN cricinfo is a sports news website exclusively for the game of cricket.
         CrickInfo app is all about Cricket and the fastest live cricket score app.
         </p>
         <div className='icon'>
        <Roll down>
        <div style={{color:"orangered",fontSize:30}}>
        <FaHtml5/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:30}}>
        <SiJavascript/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"blue",fontSize:30}}>
        <FaCss3Alt/>
        </div>
        </Roll>
        </div>
         <div className="button">
         <p><a href="https://github.com/RAVISH111/joyful-pet-260" className="btn" >GitHub</a></p>
         <p><a href="https://magenta-faloodeh-c04fb0.netlify.app/" className="btn btn-light">Live</a></p>
        </div>
        </div>
     

        <div className='card'>
          <img src={mealdb} alt="MealDb" />
         
          <h1 className='name'>TheMealDB</h1>
          <span className='bar'></span>
         <p>TheMealDB is an application that can assist you with finding food in an emergency. 
         </p>
         <div className='icon'>
        <Roll down>
        <div style={{color:"orangered",fontSize:30}}>
        <FaHtml5/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:30}}>
        <SiJavascript/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"blue",fontSize:30}}>
        <FaCss3Alt/>
        </div>
        </Roll>
        </div>
         <div className="button">
         <p><a href="https://github.com/abha2510/MealDB" className="btn" >GitHub</a></p>
         <p><a href="https://radiant-cassata-09184b.netlify.app/" className="btn btn-light">Live</a></p>
        </div>
        </div>



        <div className='card'>
          <img src={yt} alt="youtube" />
         
          <h1 className='name'>YouTube</h1>
          <span className='bar'></span>
         <p>Enjoy the videos and music you love, upload original content and share it all with friends, family and the world on YouTube. 
         </p>
         <div className='icon'>
        <Roll down>
        <div style={{color:"orangered",fontSize:30}}>
        <FaHtml5/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:30}}>
        <SiJavascript/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"blue",fontSize:30}}>
        <FaCss3Alt/>
        </div>
        </Roll>
        </div>
         <div className="button">
         <p><a href="https://github.com/abha2510/YouTube" className="btn" >GitHub</a></p>
         <p><a href="https://golden-alpaca-d81e7d.netlify.app/" className="btn btn-light">Live</a></p>
        </div>
        </div>




        <div className='card'>
          <img src={hotstar} alt="hotstar" />
         
          <h1 className='name'>HotStar</h1>
          <span className='bar'></span>
         <p>Enjoy the videos and music you love, upload original content and share it all with friends, family and the world on YouTube. 
         </p>
         <div className='icon'>
        <Roll down>
        <div style={{color:"orangered",fontSize:30}}>
        <FaHtml5/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"yellow",fontSize:30}}>
        <SiJavascript/>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"blue",fontSize:30}}>
        <FaCss3Alt/>
        </div>
        </Roll>
        </div>
         <div className="button">
         <p><a href="https://github.com/abha2510/HotStar" className="btn" >GitHub</a></p>
         <p><a href="https://boisterous-babka-ce6d06.netlify.app/" className="btn btn-light">Live</a></p>
        </div>
        </div>

      </div>
    </div>
    </Box>
    </div>
    
  )
}

export default Project
