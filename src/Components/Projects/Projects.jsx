import React from "react";
// import "./Projects.css";
import lately from "../../Images/lately.png";
import myntra from "../../Images/myntra.png";
import snapdeal from "../../Images/snapdeal.png";
import { Box, Flex, Image, SimpleGrid, Text ,Button} from "@chakra-ui/react";
// import { Button } from "react-scroll";
// import { Button } from "react-scroll";
const Project=()=>{

    return (
      <Box
        boxSizing="border-box"
        id="projects"
        pt="13vh"
       
      >
        <Text
          fontSize={["3xl", "4xl", "5xl"]}
          fontFamily="sans-serif"
          fontWeight="800"
          mb="20px"
        >
          Projects
        </Text>
        <SimpleGrid
          columns={[1, 1, 3, 3, 3]}
          gap={["1%", "1%", "2%", "4%", "5%"]}
        >
          <Box
            style={{
              padding: "3% 2%",
            }}
            border="0.5px solid grey"
          >
            <Image src={lately} alt="alt" h="40%" />
            <Text>Lately.com</Text>
            <Text style={{ height: "65px", width: "100%" }}>
              <b>Tech-Stack used: HTML,CSS,JAVASCRIPT,JQUERY.</b>
            </Text>
            <Text style={{ height: "65px", width: "100%" }} mb="20px">
              It is an A.I. powered social media marketing management platform
            </Text>
            <Flex
              flexDirection={["column", "column", "row", "row", "row"]}
              justifyContent="space-around"
            >
              <a
                href="https://github.com/Dev-Mriganka/Lately.ai"
                target="_blank"
              >
                <Button m="2%" background="teal">
                  Github
                </Button>
              </a>
              <a href="https://lately.netlify.app/" target="_blank">
                <Button m="2%" background="teal">
                  Deploy link
                </Button>{" "}
              </a>
            </Flex>
          </Box>
          <Box
            style={{
              padding: "3% 2%",
            }}
            border="0.5px solid grey"
          >
            <Image src={myntra} alt="alt" h="40%" />
            <Text>Myntra.com</Text>
            <Text style={{ height: "65px", width: "100%" }}>
              <b>Tech-Stack used: ReactJS, Chakra UI, REST API, Axios,REDUX</b>
            </Text>
            <Text style={{ height: "65px", width: "100%" }} mb="20px">
              Myntra.com is India's largest e-commerce store for fashion and
              lifestyle products.
            </Text>
            <Flex
              flexDirection={["column", "column", "row", "row", "row"]}
              justifyContent="space-around"
            >
              <a
                href="https://github.com/AMARDEEP115/Myntra-Clone"
                target="_blank"
              >
                <Button m="2%" background="teal">
                  Github
                </Button>
              </a>
              <a
                href="https://myntra-clone-seven.vercel.app/p/"
                target="_blank"
              >
                <Button m="2%" background="teal">
                  Deploy link
                </Button>{" "}
              </a>
            </Flex>
          </Box>
          <Box
            style={{
              padding: "3% 2%",
            }}
            border="0.5px solid grey"
          >
            <Image src={snapdeal} alt="alt" h="40%" />
            <Text>GrabDeal.com(SnapDeal)</Text>
            <Text style={{ height: "65px", width: "100%" }}>
              <b>
                Tech-Stack used: ReactJS, Chakra UI,Javascript,REST
                API,CSS,HTML,VERCEL
              </b>
            </Text>
            <Text style={{ height: "65px", width: "100%" }} mb="20px">
              SnapDeal React-JS E-commerce web application with all the major
              functionalities
            </Text>
            <Flex
              flexDirection={["column", "column", "row", "row", "row"]}
              justifyContent="space-around"
            >
              <a
                href="https://github.com/Maalikq/inexpensive-cause-3321"
                target="_blank"
              >
                <Button m="2%" background="teal">
                  Github
                </Button>
              </a>
              <a href="https://grabdeal.vercel.app/" target="_blank">
                <Button m="2%" background="teal">
                  Deploy link
                </Button>{" "}
              </a>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    );
}


export default Project;