import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

interface HomeProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageSrc: string;
  gifSrc?: string;
  type?: "web" | "mobile";
}

const HomeProjectCard: React.FC<HomeProjectCardProps> = ({
  id,
  title,
  description,
  techStack,
  imageSrc,
  gifSrc,
  type = "web",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link href={`${ROUTES.projects}/${id}`}>
      <Box
        _hover={{ transform: "scale(1.02)", transition: "transform 0.2s" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Image
          borderRadius={16}
          h={["12.5rem", null, null, "16rem", "20rem"]}
          w={"full"}
          src={isHovered && gifSrc ? gifSrc : imageSrc}
          alt={title}
          objectFit={type === "web" ? "cover" : "contain"}
        />
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
    </Link>
  );
};

export default HomeProjectCard;
