import React, { useState } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import { Text, HStack, Box, SimpleGrid, Stack } from "@chakra-ui/react";
import PageSection from "@/components/layout/PageSection";
import { allProjects } from "@/constants";
import ProjectCard from "@/components/cards/ProjectCard";
import Button from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

const ProjectsPage = () => {
  const [category, setCategory] = useState("All");
  const categories = ["All", "Web Apps", "Mobile"];
  return (
    <PageWrapper
      title="Projects"
      description="A showcase of technical excellence and user-centric design solutions across modern web and mobile ecosystems.">
      <PageSection>
        <Text fontSize={[40, null, 48, 54, 60]} fontWeight={"black"} color={"#F1F5F9"}>
          Selected Projects
        </Text>
        <Text fontSize={[16, null, 17, 18]} color={"#94A3B8"} w={["full", null, "70%", "60%", "55%"]}>
          A showcase of technical excellence and user-centric design solutions across modern web and mobile ecosystems.
        </Text>
        <HStack mt={6} gap={2} borderBottom={"1px solid #1E293B"} pb={[3, null, 4]}>
          {categories.map((cat, i) => (
            <Box
              key={i}
              bgColor={category === cat ? "#1F2937" : "transparent"}
              _hover={{ bgColor: "#1F293780" }}
              borderRadius={6}
              py={2}
              px={6}
              cursor={"pointer"}
              onClick={() => setCategory(cat)}>
              <Text
                fontSize={[12, null, 13, 14]}
                fontWeight={"semibold"}
                color={category === cat ? "#F1F5F9" : "#94A3B8"}>
                {cat}
              </Text>
            </Box>
          ))}
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={[5, null, 6, 8]} my={[6, null, 7, 8, 10]}>
          {allProjects
            .filter((project) => {
              if (category === "All") return true;
              if (category === "Web Apps") return project.type === "web";
              if (category === "Mobile") return project.type === "mobile";
              return false;
            })
            .map(({ title, id, description, techStack, thumbnailImg, thumbnailGif }, index) => (
              <ProjectCard
                key={index}
                id={id}
                title={title}
                description={description}
                techStack={techStack}
                imageSrc={thumbnailGif ? thumbnailGif : thumbnailImg}
              />
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

export default ProjectsPage;
