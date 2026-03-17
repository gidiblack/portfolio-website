import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import placeholder from "@/assets/project_placeholder.png";

interface HomeProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageSrc?: string;
}

const HomeProjectCard: React.FC<HomeProjectCardProps> = ({ title, description, techStack, imageSrc }) => {
  return (
    <Box>
      <Image asChild borderRadius={16} h={"20rem"} w={"full"}>
        <NextImage src={imageSrc || placeholder.src} alt={title} width={570} height={320} objectFit="cover" />
      </Image>
      <Flex mt={[4, null, 5, 6]} mb={4} align={"center"} gap={3}>
        {techStack.map((tech, index) => (
          <Box key={index} bgColor={"#1E293B"} borderRadius={6} py={1} px={2}>
            <Text fontSize={12} fontWeight={"bold"}>
              {tech}
            </Text>
          </Box>
        ))}
      </Flex>
      <Text fontSize={[20, null, 22, 24]} fontWeight={"black"} color={"#F1F5F9"} mb={2}>
        {title}
      </Text>
      <Text fontSize={[14, null, 15, 16]} color={"#94A3B8"}>
        {description}
      </Text>
    </Box>
  );
};

export default HomeProjectCard;
