import { Box, Text ,Icon, Image} from '@chakra-ui/react'
import React from 'react';
import "./skillStyle.css"
import {ImHtmlFive2} from "react-icons/im";
import {FaCss3Alt, FaNodeJs, FaReact,FaGithub,FaTools, FaAngular, FaBootstrap, FaBitbucket, FaHtml5, FaCss3} from "react-icons/fa";
import {TbBrandJavascript} from "react-icons/tb"
import { SiExpress, SiMongodb, SiRedux ,SiNetlify, SiVisualstudiocode} from 'react-icons/si';
import Rotate from 'react-reveal/Rotate';
import {SiSkillshare} from "react-icons/si"
import {DiGit} from "react-icons/di";
import {SiPostman,SiVercel} from "react-icons/si";
const Skills = () => {
  return (
    <div className='ab'>
      <Box className='skills' id="skills" w="full" color="#ffffff" p="30px 0px">
      <h1 style={{color:"#7eadfc",textAlign:"center", marginBottom:"50px"}}><SiSkillshare className='bounce2'/>  SKILLS</h1>
        {/* <span className='bar2'></span> */}
        <div className='contain'>
        <Box w="100%" m="auto">        
        <Box className='main' >
        <Rotate top left>  
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={FaAngular} w={["30px","35px","50px"]} h="90px" color="#c0012e"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">Angular</Text>
            </Box>
        </Box>
        <Box className='skillrouter' >
            <Box className='skillinner' >
                <Icon as={FaReact} w={["30px","35px","50px"]} h="100px" color="#82EEFD"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">React</Text>
            </Box>
        </Box>
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={FaBootstrap} w={["30px","35px","50px"]} h="90px" color="#5e478d"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">Bootstrap</Text>
            </Box>
        </Box>
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={FaHtml5} w={["30px","35px","50px"]} h="90px" color="orangered"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">HTML</Text>
            </Box>
        </Box>
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={FaCss3} w={["30px","35px","50px"]} h="90px" color="blue"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">CSS</Text>
            </Box>
        </Box>
        <Box className='skillrouter' >
            <Box className='skillinner'>
                <Icon as={TbBrandJavascript} w={["30px","35px","50px"]} h="100px" color="yellow"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">JS</Text>
            </Box>
        </Box>
        </Rotate>
        <Rotate top right>
        <Box className='skillrouter' >
            <Box className='skillinner'>
                <Icon as={SiMongodb} w={["30px","35px","50px"]} h="100px" color="green"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">MongoDB</Text>
            </Box>
        </Box>
        <Box className='skillrouter' >
            <Box className='skillinner'>
                <Icon as={SiExpress} w={["30px","35px","50px"]} h="100px" color="white"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">Express</Text>
            </Box>
        </Box>
        <Box className='skillrouter' >
            <Box className='skillinner'>
                <Icon as={FaNodeJs} w={["30px","35px","50px"]} h="100px" color="#74B72E"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">Node</Text>
            </Box>
        </Box>
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={SiRedux} w={["30px","35px","50px"]} h="100px" color="#AF69EF"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">Redux</Text>
            </Box>
        </Box>
        </Rotate>
        </Box>
        </Box>
        </div>
    </Box>
    <Box>
    <h1 style={{color:"#7eadfc", marginBottom:"50px",marginTop:"20px" ,textAlign:"center"}}><FaTools className='bounce2'/>  TOOLS</h1>
    {/* <span className='bar2'></span> */}
   <div>
    <Box m={"auto"} w="100%" marginBottom={20}>
    <Box className='main' >
        <Rotate top left>  
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={FaBitbucket} w={["30px","35px","50px"]} h="90px" color="#2581fc"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">Bitbucket</Text>
            </Box>
        </Box>
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={DiGit} w={["30px","35px","50px"]} h="90px" color="orangered"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">Git</Text>
            </Box>
        </Box>
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={SiNetlify} w={["30px","35px","50px"]} h="90px" color="#5cebdf"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">Netlify</Text>
            </Box>
        </Box>
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={SiPostman} w={["30px","35px","50px"]} h="90px" color="orangered"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">Postman</Text>
            </Box>
        </Box>

        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={FaGithub} w={["30px","35px","50px"]} h="90px" color="white"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">GitHub</Text>
            </Box>
        </Box>
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={SiVercel} w={["30px","35px","50px"]} h="90px" color="white"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">Vercel</Text>
            </Box>
        </Box>
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={SiVisualstudiocode} w={["30px","35px","50px"]} h="90px" color="#018ed5"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">VsCode</Text>
            </Box>
        </Box>
        </Rotate>
        {/* <Box className='skillrouter'>
            <Box className='skillinner'>
                <Image src="https://img.icons8.com/color/256/visual-studio-code-2019.png" w={["30px","35px","50px"]} h="80px" ml={["60px"]}/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">VsCode</Text>
            </Box>
        </Box> */}
        </Box>
    </Box>
   </div>
    </Box>
    </div>
  )
}

export default Skills
