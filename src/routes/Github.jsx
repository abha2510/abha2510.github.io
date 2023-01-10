import { Box } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from "react-github-calendar";


const Github = () => {

  return (
    <>
    <Box  color={"white"}  w="80%">
          <h1 style={{ marginLeft: "53%",color:"#F26B8A"}}>GitHub-Calendar</h1>
          <Box px={['2%','4%','8%','16%','24%']} py={8} mt={20} >
            <div style={{width:"150%"}}>
   <GitHubCalendar
        username="abha2510"
        blockSize={20}
        blockMargin={5}
        color="#F26B8A"
        fontSize={20}
        m={40}
        w='100%'
      />

      
      {/* ayu-light */}
      <h1 style={{marginLeft: "40%",color:"#F26B8A", marginBottom:"6%"}}>GitHub Stats</h1>
       <img  src="https://github-readme-streak-stats.herokuapp.com/?user=abha2510&theme=deuteranopia-friendly-theme" alt="stat" />
       </div>
      </Box>
    
    </Box>
    </>
  )
}

export default Github
