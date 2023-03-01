import { Box } from '@chakra-ui/react'
import React from 'react';
import "./ProjectStyle.css";
import classy from "../assests/classy.png";
import {FaReact} from "react-icons/fa"
import {SiChakraui} from "react-icons/si";
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

const Project = () => {
  return (
    <div>
     <Box className='project' id="project" color={"white"}>
     <h1 style={{marginLeft:"42%" ,color:"#F26B8A"}}><VscProject className='bounce2'/>  PROJECTS</h1>
   {/* <span className='bar1'></span>
   */}
    <div className='project'>
    
      <div className='card-container'>

      <div className='card'>
          <img src={digital} alt="digitalXpress" />
         
          <h1 className='name'>Digital Xpress</h1>
          <span className='bar'></span>
         <p>Digital Xpress is one of the leading online shopping websites in
           India for electronic products, home & kitchen appliances etc.
         </p>
         <h3 className='techstack'> TechStacks:</h3>
         <div className='icon'>
        <Roll down>
        <div style={{color:"#AF69EF",fontSize:20 , marginLeft:"-40px"}}>
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
         <p><a href="https://adventurous-sweater-7809.vercel.app/" target="_blank" className="btn btn-light">Live</a></p>
        </div>
        </div>
     

        <div className='card'>
          <img  src={classy} alt="classyattire" />
         
          <h1 className='name'>Classy Attire</h1>
          <span className='bar'></span>
         <p>Classy Attire as a trendy, youthful and vibrant store, Classy Attire offers consumers an enjoyable shopping experience.</p>
        <h3 className='techstack'> TechStacks:</h3>
       <div className='icon'>
       <Roll down>
        <div style={{color:"#00ffff",fontSize:20 , marginLeft:"-40px"}}>
        <FaReact/>
        <h6>React</h6>
        </div>
        </Roll>
        <Roll down>
        <div style={{color:"#00cdcd",fontSize:20}}>
        <SiChakraui/>
        <h6>ChakraUI</h6>
        </div>
        </Roll>
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
         <p><a href="https://github.com/abha2510/elite-passenger-6126" target="_blank" className="btn" >GitHub</a></p>
         <p><a href="https://classy-attire.vercel.app/" target="_blank" className="btn btn-light">Live</a></p>
         </div>
        </div>
       

        <div className='card'>
          <img src={travel} alt="traveladvisor" />
        
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
          <img src={mealdb} alt="MealDb" />
         
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
          <img src={yt} alt="youtube" />
         
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
          <img src={hotstar} alt="hotstar" />
         
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
