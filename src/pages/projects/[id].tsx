import React from "react";
import PageSection from "@/components/layout/PageSection";
import PageWrapper from "@/components/layout/PageWrapper";
import { Box, HStack, SimpleGrid, Stack, Text, Flex, Image, Icon } from "@chakra-ui/react";
import Button from "@/components/ui/button";
import { FaCode, FaMicrochip } from "react-icons/fa6";
import { IoMdOpen } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { TbRosetteDiscountCheck } from "react-icons/tb";
import { BsGear, BsTypescript } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";
import { allProjects } from "@/constants";
import { useRouter } from "next/router";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const ProjectDetails = () => {
  const { query } = useRouter();
  const projectId = query.id as string;
  const projectData = allProjects.find((project) => project.id === projectId);

  if (!projectData) {
    return (
      <PageWrapper title={"Project Not Found"} description={"The project you are looking for does not exist."}>
        <PageSection textAlign={"center"}>
          <Text
            fontSize={[20, null, 22, 24]}
            fontWeight={"bold"}
            color={"#F1F5F9"}
            mb={[2, null, 3]}
            mt={[8, null, 10, 12]}>
            Project Not Found
          </Text>
          <Text fontSize={[14, null, 15, 16]} fontWeight={"medium"} color={"#F1F5F9"} mb={[2, null, 3]}>
            The project you are looking for does not exist. Check the link and try again
          </Text>
          <Link href={ROUTES.projects}>
            <Button variant={"primary"} size={["sm", null, "md"]}>
              Back to Projects
            </Button>
          </Link>
        </PageSection>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title={projectData.title} description={projectData.description}>
      {/* Hero Section */}
      <PageSection mt={[8, null, 10, 12]}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={[5, null, 6, 8, 10]} alignItems={"center"}>
          <Stack gap={[3, null, 4]}>
            <Flex
              fontSize={[10, null, 11, 12]}
              fontWeight={"bold"}
              color={"#F1F5F9"}
              bgColor={"#1E293B"}
              px={[2, null, 2.5, 3]}
              py={1}
              borderRadius={"full"}
              w={"fit-content"}
              align={"center"}
              gap={2}
              border={"1px solid #334155"}>
              <Box boxSize={[2, null, 2.5]} borderRadius={"full"} bgColor={"#22C55E"} />
              FEATURED PROJECT
            </Flex>
            <Text fontSize={[56, null, 60, 64, 72]} fontWeight={"black"} color={"#F1F5F9"} lineHeight={"72px"}>
              {projectData.title}
            </Text>
            <Text fontSize={[15, null, 16, 18]} color={"#94A3B8"}>
              {projectData.description}
            </Text>
            <HStack gap={[3, null, 4]} pt={[4, null, 6, 7, 8, 10]}>
              <Link href={projectData.liveDemoLink} target="_blank" rel="noopener noreferrer">
                <Button variant={"white"} size={["md", null, "lg"]}>
                  <Icon as={IoMdOpen} boxSize={4} color={"#1F2937"} mr={1} mb={1} />
                  View Live Demo
                </Button>
              </Link>
              {projectData.githubRepoLink && (
                <Link href={projectData.githubRepoLink} target="_blank" rel="noopener noreferrer">
                  <Button variant={"outline"} size={["md", null, "lg"]}>
                    <Icon as={FaCode} boxSize={4} color={"#F1F5F9"} mr={1} mb={1} />
                    Github Repo
                  </Button>
                </Link>
              )}
            </HStack>
          </Stack>
          <Flex flexDir={"column"} h={"full"} justifyContent={"center"} alignItems={"center"}>
            <Image
              src={projectData.thumbnailGif ? projectData.thumbnailGif : projectData.thumbnailImg}
              w={"full"}
              h={["17.5rem", null, "20rem", "22.5rem", "24rem", "25rem"]}
              alt={projectData.title}
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={[3, null, 4]}
          mt={[8, null, 10, 12, 16]}
          alignItems={"center"}>
          {projectData.overview.map((item, index) => (
            <Box
              key={index}
              bgColor={"#0F172A"}
              p={[4, null, 5, 6]}
              borderRadius={12}
              border={"1px solid #1E293B"}
              gap={1}>
              <Text fontSize={12} fontWeight={"bold"} color={"#64748B"} textTransform={"uppercase"}>
                {item.label}
              </Text>
              <Text fontSize={[16, null, 18, 20]} fontWeight={"bold"} color={"#F1F5F9"}>
                {item.value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </PageSection>
      <PageSection bgColor={"#0F172A50"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={[10, null, 12, 14, 16]}>
          <Box>
            <HStack>
              <Icon as={MdErrorOutline} color={"#EF4444"} boxSize={[4, null, 5, 6]} />
              <Text fontSize={[22, null, 24, 28, 30]} fontWeight={"bold"} color={"#F1F5F9"}>
                The Challenge
              </Text>
            </HStack>
            <Text mt={[4, null, 5, 6]} fontSize={[14, null, 15, 16]} color={"#94A3B8"} whiteSpace={"pre-line"}>
              {projectData.challenge}
            </Text>
          </Box>
          <Box>
            <HStack>
              <Icon as={TbRosetteDiscountCheck} color={"#22C55E"} boxSize={[4, null, 5, 6]} />
              <Text fontSize={[22, null, 24, 28, 30]} fontWeight={"bold"} color={"#F1F5F9"}>
                The Solution
              </Text>
            </HStack>
            <Text mt={[4, null, 5, 6]} fontSize={[14, null, 15, 16]} color={"#94A3B8"} whiteSpace={"pre-line"}>
              {projectData.solution}
            </Text>
          </Box>
        </SimpleGrid>
      </PageSection>
      <PageSection>
        <Text fontSize={[22, null, 24, 28, 30]} fontWeight={"bold"} color={"#F1F5F9"}>
          The Engine Under the Hood
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={[4, null, 6, 8, 9, 10]} mt={[6, null, 8, 10]}>
          {projectData.engine.map((item, index) => (
            <Flex
              key={index}
              border={"1px solid #1E293B"}
              borderRadius={8}
              p={[4, null, 5]}
              alignItems={"center"}
              gap={[3, null, 4]}>
              <Flex
                align={"center"}
                justify={"center"}
                boxSize={[8, null, 9, 10]}
                bgColor={"#3B82F610"}
                borderRadius={8}>
                <Icon
                  as={
                    item.label.includes("Frontend")
                      ? BsTypescript
                      : item.label.includes("API")
                        ? FaMicrochip
                        : item.label.includes("Database")
                          ? AiFillDatabase
                          : BsGear
                  }
                  color={"#3B82F6"}
                  boxSize={[3, null, 4]}
                />
              </Flex>
              <Stack gap={0}>
                <Text fontSize={[14, null, 15, 16]} color={"#F1F5F9"}>
                  {item.value}
                </Text>
                <Text fontSize={[12, null, 13, 14]} color={"#64748B"}>
                  {item.label}
                </Text>
              </Stack>
            </Flex>
          ))}
        </SimpleGrid>
      </PageSection>
      {/* CTA */}
      <PageSection bgColor={"#0F172A50"}>
        <Stack gap={[4, null, 5, 6]} maxW={"60rem"} mx={"auto"} textAlign={"center"} align={"center"}>
          <Text fontSize={[32, null, 36, 40, 44]} fontWeight={"black"} color={"#F1F5F9"}>
            Ready to build something impactful?
          </Text>
          <Text fontSize={[16, null, 17, 18]} color={"#CBD5E1"} w={["full", null, "90%", "80%", "75%"]}>
            Let's discuss your project requirements and how we can turn your vision into a production-ready reality.
          </Text>
          <Link href={ROUTES.hireme}>
            <Button variant={"primary"} size={"lg"}>
              Hire Me
            </Button>
          </Link>
        </Stack>
      </PageSection>
    </PageWrapper>
  );
};

export default ProjectDetails;
