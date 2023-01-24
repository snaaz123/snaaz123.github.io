import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import "./Contact.css";
import LN from "../../Images/linkedin.png";
import EM from "../../Images/email.png";
import git from "../../Images/github.png";
import PH from "../../Images/phone.png";

const Contact = () => {


  return (
    <Box id="contact" h="650px"  pt="13vh">
      <Text
        fontSize={["3xl", "4xl", "5xl"]}
        fontFamily="sans-serif"
        fontWeight="800"
      >
        Contact
      </Text>

      <SimpleGrid columns={[1, 1, 3, 3, 4]} gap="5%" p="100px">
        <Box m="auto" className="con">
          <a href="https://www.linkedin.com/in/najrin-shah/" target="_blank">
            <Image src={LN} boxSize="80px" />
            <Text>Linkedin</Text>
          </a>
        </Box>
        <Box m="auto" className="con">
          <Image src={EM} boxSize="80px" />
          <Text>Email</Text>
        </Box>
        <Box m="auto" className="con">
          <a herf="https://github.com/snaaz123" target="_blank">
            <Image src={git} boxSize="80px" />
            <Text>Github</Text>
          </a>
        </Box>
        <Box m="auto" className="con">
          <Image src={PH} boxSize="80px" />
          <Text>Phone</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
    
 
};

export default Contact;
