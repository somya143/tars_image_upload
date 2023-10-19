import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";

const ImageCard = ({ src, title }) => {
  return (
    <Box bg={"#fff"} borderRadius={"10px"}>
      <Image src={src} alt='Movie' width={"100%"} height={"250px"} />
      <Text color={"#333"} fontSize={"19px"} fontWeight={700} fontFamily={"heading"} textAlign={"center"}>{title}</Text>
    </Box>
  )
}

export default ImageCard
