import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./About.css"

const About=()=>{

return (
  <Box id="about" pt="13vh" >
    <Text
      fontSize={["3xl", "4xl", "5xl"]}
      fontFamily="sans-serif"
      fontWeight="800"
     
    >
      About Me
    </Text>
    <Box w={["98%", "95%", "70%", "60%", "50%"]} m="auto">
      <Text m="auto" fontSize="xl">
        Analytical and detail-oriented aspiring Full Stack Web Developer.
        Capable of writing production-ready code using MERN stack. Passionate
        about coding and intensely interested in working in a product-based
        company.
      </Text>
    </Box>
    <br></br>
    <Text>My GitHub Stats</Text>
    <SimpleGrid columns={[1, 2, 2, 3, 3]} gap="4%">
      <Image
        src="https://github-readme-stats.vercel.app/api?username=snaaz123&show_icons=true&theme=algolia&count_private=true"
        width="400px"
      />
      <Image
        alt="Najrin Shah's Top Languages Stats"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=snaaz123&hide=smalltalk&theme=algolia&layout=compact"
        width="400px"
      />
      <Image
        src="https://github-readme-streak-stats.herokuapp.com/?user=snaaz123&hide=smalltalk&theme=algolia&layout=compact"
        width="400px"
      />
    </SimpleGrid>
    <br />
    <br />
    <Box>
      <center fontSize="10px">
        <GitHubCalendar username="snaaz123" />
      </center>
    </Box>
  </Box>
);
}

export default About;