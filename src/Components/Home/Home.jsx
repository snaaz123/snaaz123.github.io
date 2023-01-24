import React from "react";
import "./Home.css";
import profile from "../../Images/NAAZ_pic1.jpg";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import resume from "../../Images/Najrin-Shah-Resume.pdf";
const Home = () => {
  const toggleClick2 = () => {
    window.open(
      "https://drive.google.com/file/d/1-ySbYAzy2x-HRJgWV-thioGRaLwAh1lK/view?usp=share_link"
    );
  };
  return (
    // <div
    //   className="home-wrapper"
    //   style={{
    //     textAlign: "left",
    //     paddingLeft: "10rem",
    //     display: "flex",
    //     alignItems: "center",
    //     gap:"4rem"
    //   }}
    // >
    //   <div className="left">
    //     <div
    //       className="name-n"
    //       style={{ fontSize: "35px", fontWeight: "900" }}
    //     >
    //       Hey!!! I am
    //     </div>
    //     <div className="n" style={{ fontSize: "45px", fontWeight: "900" }}>
    //       Najrin Shah
    //     </div>
    //     <div
    //       className="profile"
    //       style={{ display: "flex", gap: "10px", alignItems: "center" }}
    //     >
    //       <div style={{ fontSize: "35px", fontWeight: "900" }}>And I'm</div>
    //       <div style={{ fontSize: "45px", fontWeight: "900" }}>
    //         Full Stack Developer
    //       </div>
    //     </div>
    //     <a>
    //       <button className="resume-btn">Resume</button>
    //     </a>
    //   </div>

    //   <din className="right">
    //     <img className="my-photo"
    //       src={profile}
    //     />
    //   </din>
    // </div>
    <>
      <Box bgColor="#1A202C" color="white" id="home">
        <Flex
          p="80px"
          flexDirection={["column", "column", "row", "row"]}
          // flexWrap="wrap"
          justifyContent={["space-between"]}
          alignItems="center"
        >
          <Box ml={2} textAlign="left">
            <Text fontSize={["xl", "3xl", "4xl"]} fontWeight="bold">
              Hey !!! I am Najrin
            </Text>
            <Text fontSize={["xl", "2xl", "3xl", "5xl"]} fontWeight="bold">
              Full Stack Developer
            </Text>
            <a target="_blank" href={resume} download="Najrin-Shah-Resume.pdf">
              <Button
                color="black"
                size={["xs", "sm", "md", "lg"]}
                className="resume"
                bg="pink"
                onClick={toggleClick2}
              >
                Resume
              </Button>
            </a>
          </Box>
          <Box>
            <Image src={profile} borderRadius="full" alt="Dan Abramov" />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
