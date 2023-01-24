import React from "react";
import "./Skills.css"
import REACT from "../../Images/REACT.png";
import JS from "../../Images/JAVASCRIPT.png";
import HEROKU from "../../Images/heroku.png";
import MONGODB from "../../Images/mongodb.png";
import GIT from "../../Images/GIT.png";
import CSS from "../../Images/CSS.png";
import HTML from "../../Images/html.png";
import NODE from "../../Images/node-js.png";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Skills = () => {
  return (
    //     <div className="skills" id="skills">
    //       <div className="head">technical skills</div>
    // {/* SimpleGrid columns={[1,2,3,3,4]} gap="5%" */}
    //       <div className="skills-name" >
    //         <div className="skill-n ">
    //           <div className="tooltip">
    //             <img className="img" src={HEROKU} />
    //             <span className="tooltiptext">HEROKU</span>
    //           </div>

    //           <h2 className="skill-heading">HEROKU</h2>
    //         </div>
    //         <div className="skill-n">
    //           <img src={JS} title="JAVASCRIPT" />
    //           <h2 className="skill-heading">JAVASCRIPT</h2>
    //         </div>

    //         <div className="skill-n">
    //           <img src={GIT} title="GIT" />
    //           <h2 className="skill-heading">GIT</h2>
    //         </div>

    //         <div className="skill-n">
    //           <img src={CSS} title="CSS" />
    //           <h2 className="skill-heading">CSS</h2>
    //         </div>

    //         <div className="skill-n">
    //           <img src={HTML} title="HTML" />
    //           <h2 className="skill-heading">HTML</h2>
    //         </div>
    //         <div className="skill-n">
    //           <img src={REACT} title="REACT" />
    //           <h2 className="skill-heading">REACT</h2>
    //         </div>

    //         <div className="skill-n">
    //           <img src={MONGODB} title="mongoDB" />
    //           <h2 className="skill-heading">mongoDB</h2>
    //         </div>

    //         <div className="skill-n">
    //           <img src={NODE} title="Node" />
    //           <h2 className="skill-heading">NODE JS</h2>
    //         </div>
    //       </div>
    //     </div>
    <Box
      boxSizing="border-box"
      p={["180px 0","110px 0","150px 0","40px 0"]}
      borderRadius="12px"
    
      id="skills"
      pt="14vh"
    >
      <Text
        fontSize={["3xl", "4xl", "5xl"]}
        fontFamily="sans-serif"
        fontWeight="800"
        background="white"
      >
        Technical Skills
      </Text>
      <SimpleGrid
        columns={[1, 2, 2, 3, 3]}
        gap={["1%", "2%", "3%", "3%", "3%"]}
        mt="50px"
        p="20px 40px"
      >
        <Box
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          p="40px 50px"
          borderRadius="12px"
          className="tooltip"
          background="white"
        >
          <Image src={HEROKU}></Image>
          <span className="tooltiptext">HEROKU</span>
          <Text mt={2} as="b">
            HEROKU
          </Text>
        </Box>
        <Box
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          p="40px 50px"
          borderRadius="12px"
          className="tooltip"
          background="white"
        >
          <Image src={JS}></Image>
          <span className="tooltiptext">JAVASCRIPT</span>
          <Text mt={2} as="b">
            JAVASCRIPT
          </Text>
        </Box>
        <Box
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          p="40px 50px"
          borderRadius="12px"
          className="tooltip"
          background="white"
        >
          <Image src={MONGODB}></Image>
          <span className="tooltiptext">mongoDB</span>
          <Text mt={2} as="b">
            mongoDB
          </Text>
        </Box>
        <Box
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          p="40px 50px"
          borderRadius="12px"
          className="tooltip"
          background="white"
        >
          <Image src={CSS}></Image>
          <span className="tooltiptext">CSS</span>
          <Text mt={2} as="b">
            CSS
          </Text>
        </Box>
        <Box
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          p="40px 50px"
          borderRadius="12px"
          className="tooltip"
          background="white"
        >
          <Image src={HTML}></Image>
          <span className="tooltiptext">HTML</span>
          <Text mt={2} as="b">
            HTML
          </Text>
        </Box>
        <Box
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          p="40px 50px"
          borderRadius="12px"
          className="tooltip"
          background="white"
        >
          <Image src={GIT}></Image>
          <span className="tooltiptext">GIT</span>
          <Text mt={2} as="b">
            GIT
          </Text>
        </Box>
        <Box
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          p="40px 50px"
          borderRadius="12px"
          className="tooltip"
          background="white"
        >
          <Image src={REACT}></Image>
          <span className="tooltiptext">REACT</span>
          <Text mt={2} as="b">
            REACT
          </Text>
        </Box>
        <Box
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          p="40px 50px"
          borderRadius="12px"
          className="tooltip"
          background="white"
        >
          <Image src={NODE}></Image>
          <span className="tooltiptext">NODE JS</span>
          <Text mt={2} as="b">
            NODE JS
          </Text>
        </Box>
        <Box
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          p="40px 50px"
          borderRadius="12px"
          className="tooltip"
          background="white"
        >
          <Image src={HEROKU}></Image>
          <span className="tooltiptext">HEROKU</span>
          <Text mt={2} as="b">
            HEROKU
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
