import {GoCalendar} from "react-icons/go";
import React from "react";
import { Image,  Box, Flex} from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import "./GithubStyle.css"



const Github = () => {
  return (
    <Box  w={"80%"} margin={"auto"}>
      
      <h1  className="gitname"><GoCalendar className="bounce2"/> My GitHub Stats</h1>
      <Box >
        <Flex direction={["column","column","column"]} w={"70%"} margin={"auto"} mb={10} border={"0px solid white"}>
           <Box border={"0px solid white"}>
          <Image
          // w={"80%"}
          mb={"30px"}
             ml={["-10px", "20px", "30px"]}
            width={["100%", "", "90%"]}
            // mt={["", "", "30px"]}
            height={"280px"}
            src="https://github-readme-stats.vercel.app/api?username=abha2510&show_icons=true&locale=en&theme=dark"
          />  
          </Box>       
        <Box>
          <Image
          border={"0px solid white"}
          mb={"30px"}
            // ml={["28px", "20px", "25%"]}
            // width={["85%", "95%", "50%"]}
            // mt={["", "-50px", "-20px"]}
            height={"300px"}
            src="https://github-readme-streak-stats.herokuapp.com/?user=abha2510&theme=deuteranopia-friendly-theme"
          />

           </Box>
      
        <Box
          border={"1px solid white"}
          borderRadius={"10px"}
          backgroundColor={"black"}
          padding={[6, 8, 10]}
          color={"white"}
          margin={"auto"}
          // mt={["-30px", "-10px", "30px"]}
          fontSize={["12px", "20px", "20px"]}
          width={["90%", "100%", "90%"]}
        >
          <GitHubCalendar
            username="abha2510"
            blockSize={19}
            blockMargin={6}
            color={"#F26B8A"}
            m={"auto"}
            fontSize={20}

          />
        </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Github;
