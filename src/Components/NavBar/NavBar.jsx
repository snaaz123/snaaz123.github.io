import React from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
 import { HamburgerIcon } from "@chakra-ui/icons";
 import resume from "../../Images/Najrin-Shah-Resume.pdf";
const NavBar=()=>{
        const [navMid] = useMediaQuery("(min-width: 800px)");
 const toggleClick2 = () => {
   window.open(
     "https://drive.google.com/file/d/1-ySbYAzy2x-HRJgWV-thioGRaLwAh1lK/view?usp=share_link"
   );
 };
    return (
      // <div className="na-wrapper">
      //   <div className="name">
      //     <div>Najrin</div>
      //     <a href="#" class="toggle-button">
      //       <span class="bar"></span>
      //       <span class="bar"></span>
      //       <span class="bar"></span>
      //     </a>
      //   </div>
      //   <div className="nav">
      //     <ul style={{ listStyleType: "none" }}>
      //       <li>
      //         <Link activeClass="active" to="NavBar" spy={true} smooth={true}>
      //           HOME
      //         </Link>
      //       </li>
      //       <li>
      //         <Link to="about" spy={true} smooth={true}>
      //           ABOUT
      //         </Link>
      //       </li>
      //       <li>
      //         <Link to="projects" spy={true} smooth={true}>
      //           PROJECTS
      //         </Link>
      //       </li>
      //       <li>
      //         <Link to="skills" spy={true} smooth={true}>
      //           SKILLS
      //         </Link>
      //       </li>
      //       <li>
      //         <Link to="contact" spy={true} smooth={true}>
      //           CONTACT
      //         </Link>
      //       </li>
      //     </ul>
      //   </div>
      // </div>
      <>
        <Flex
          p="15px 10px"
          top="0px"
          bgColor="black"
          color="white"
          gap="2"
          fontWeight="bold"
          id="pos"
        >
          <Box>
            <Text
              style={{ fontWeight: "500px" }}
              fontSize={["sm", "xl", "2xl", "3xl"]}
            >
              {" "}
              <b className="nav-menu"> Najrin </b>
            </Text>
          </Box>
          <Spacer />

          <Box>
            {navMid && (
              <Box display="flex" alignItems="baseline" gap="15px">
                <Link to="home" spy={true} smooth={true}>
                  <Text
                    fontSize="xl"
                    as="b"
                    textTransform="uppercase"
                    className="nav-menu"
                  >
                    Home
                  </Text>
                </Link>

                <Link to="about" spy={true} smooth={true}>
                  <Text
                    fontSize="xl"
                    as="b"
                    textTransform="uppercase"
                    className="nav-menu"
                  >
                    About Me
                  </Text>
                </Link>

                <Link to="skills" spy={true} smooth={true}>
                  <Text
                    fontSize="xl"
                    as="b"
                    textTransform="uppercase"
                    className="nav-menu"
                  >
                    Skills
                  </Text>
                </Link>

                <Link to="projects" spy={true} smooth={true}>
                  <Text
                    fontSize="xl"
                    as="b"
                    textTransform="uppercase"
                    className="nav-menu"
                  >
                    Projects
                  </Text>
                </Link>

                <Link to="contact" spy={true} smooth={true}>
                  <Text
                    fontSize="xl"
                    as="b"
                    textTransform="uppercase"
                    className="nav-menu"
                  >
                    Contact
                  </Text>
                </Link>

                <a  href={resume} download="Najrin-Shah-Resume.pdf">
                  <Text
                    fontSize="xl"
                    as="b"
                    textTransform="uppercase"
                    className="nav-menu"
                    onClick={toggleClick2}
                  >
                    Resume
                  </Text>{" "}
                </a>
              </Box>
            )}

            {!navMid && (
              <Menu bg="#9AE6B4">
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList bg="black">
                  <MenuItem bg="black"> Home</MenuItem>
                  <Link to="about" spy={true} smooth={true}>
                    <MenuItem bg="black">About Me</MenuItem>
                  </Link>

                  <Link to="skills" spy={true} smooth={true}>
                    <MenuItem bg="black">skills</MenuItem>
                  </Link>

                  <Link to="projects" spy={true} smooth={true}>
                    <MenuItem bg="black">Projects</MenuItem>
                  </Link>

                  <Link to="contact" spy={true} smooth={true}>
                    <MenuItem bg="black"> Contact</MenuItem>
                  </Link>

                  <a download="najrin_shah.pdf">
                    {" "}
                    <MenuItem bg="black"> Resume</MenuItem>{" "}
                  </a>
                </MenuList>
              </Menu>
            )}
          </Box>
        </Flex>
      </>
    );
}

export default NavBar;