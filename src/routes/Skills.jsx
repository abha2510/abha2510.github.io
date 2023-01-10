import { Box, Text ,Icon} from '@chakra-ui/react'
import React from 'react';
import "./skillStyle.css"
import {ImHtmlFive2} from "react-icons/im";
import {FaCss3Alt, FaNodeJs, FaReact} from "react-icons/fa";
import {TbBrandJavascript} from "react-icons/tb"
import { SiExpress, SiMongodb, SiRedux } from 'react-icons/si';
import Rotate from 'react-reveal/Rotate';

const Skills = () => {
  return (
    <div>
      <Box className='skills' id="skills" w="full" color="#ffffff" p="30px 0px">
      <h1 className='skill'>SKILLS</h1>
        <span className='bar'></span>
        <Box w="85%" m="auto">        
        <Box className='main' >
        <Rotate top left>  
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={ImHtmlFive2} w={["30px","35px","50px"]} h="90px" color="orangered"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">HTML</Text>
            </Box>
        </Box>
        <Box className='skillrouter'>
            <Box className='skillinner'>
                <Icon as={FaCss3Alt} w={["30px","35px","50px"]} h="90px" color="blue"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">CSS</Text>
            </Box>
        </Box>
        <Box className='skillrouter' >
            <Box className='skillinner'>
                <Icon as={TbBrandJavascript} w={["30px","35px","50px"]} h="100px" color="yellow"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">JS</Text>
            </Box>
        </Box>
        <Box className='skillrouter' >
            <Box className='skillinner' >
                <Icon as={FaReact} w={["30px","35px","50px"]} h="100px" color="#82EEFD"/>
                <Text fontSize={["10px","15px","20px"]} marginBottom="10%">React</Text>
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
    </Box>
    </div>
  )
}

export default Skills
