import React from "react";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import NextImage from "next/image";
import Button from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, techStack, imageSrc }) => {
  return (
    <Box bgColor={"#0F172A"} borderRadius={12}>
      <Image
        h={["20.5rem", null, "15rem", "18rem", "20.5rem"]}
        w={"full"}
        src={imageSrc}
        alt={title}
        objectFit="cover"
      />
      <Box p={[5, null, 6, 7, 8]}>
        <Flex align={"center"} gap={3} mb={4}>
          {techStack.map((tech, index) => (
            <Box key={index} bgColor={"#1E293B"} borderRadius={16} py={2} px={3}>
              <Text fontSize={12} fontWeight={"medium"} color={"#CBD5E1"} lineHeight={"16px"}>
                {tech}
              </Text>
            </Box>
          ))}
        </Flex>
        <Text fontSize={[20, null, 22, 24]} fontWeight={"bold"} color={"#F1F5F9"} mb={2}>
          {title}
        </Text>
        <Text fontSize={[14, null, 15, 16]} color={"#94A3B8"}>
          {description}
        </Text>
        <Link href={`/projects/${id}`}>
          <Button variant={"secondary"} size={"sm"} mt={[5, null, 6, 7, 8]}>
            View Details
            <Icon as={GoArrowRight} color={"#F1F5F9"} boxSize={[3, null, 4]} ml={2} />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ProjectCard;
