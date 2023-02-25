import { Box } from '@chakra-ui/react';
import React from 'react'
import "./GithubStyle.css";
import Fade from 'react-reveal/Fade';
import {GoCalendar} from "react-icons/go";
import {TfiStatsUp} from "react-icons/tfi";
import GitHubCalendar from 'react-github-calendar';


const Github = () => {
  return (

     <div>
     <Box  color={"white"}  w="80%">
           <h1  className="gitname"><GoCalendar className="bounce2"/>  GitHub-Calendar</h1>
         <Box px={['2%','4%','8%','16%','24%']} py={8} mt={20} >
            <div className='gitcalendar'>
            <Fade left>
            <div  className="cal">           
         <GitHubCalendar
        username="abha2510"
        blockSize={20}
        m={"auto"}
        blockMargin={6}
        fontSize={20}
        color={"#1877f2"} 
        
        />
      
    </div> 
   
    </Fade>   
      <div className='stats'>
      <h1><TfiStatsUp className='bounce2'/>  GitHub Stats</h1>
      <Fade right>
      <div className='statimg'>
       <img  src="https://github-readme-streak-stats.herokuapp.com/?user=abha2510&theme=deuteranopia-friendly-theme" alt="stat" />
       </div>
       </Fade>
       </div>
       </div>
      </Box>
    
    </Box>
     </div>
  )
}

export default Github




