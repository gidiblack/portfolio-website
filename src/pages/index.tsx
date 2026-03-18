import { Box, HStack, SimpleGrid, Stack, Text, Flex, Image, Icon } from "@chakra-ui/react";
import PageSection from "@/components/layout/PageSection";
import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/button";
import HeroSnippet from "@/assets/stack-snippet.png";
import { RiFlutterFill, RiNextjsFill } from "react-icons/ri";
import { FaFigma, FaReact } from "react-icons/fa";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbBrandReactNative } from "react-icons/tb";
import ServiceCard from "@/components/cards/ServiceCard";
import { AiOutlineCode } from "react-icons/ai";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import HomeProjectCard from "@/components/cards/HomeProjectCard";
import { ROUTES } from "@/constants/routes";

export default function Home() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and high-performance web applications using modern technologies.",
      features: ["Custom web app development", "Progressive Web Apps (PWA)", "API integration"],
      icon: AiOutlineCode,
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user interfaces that enhance user experience.",
      features: ["User research and personas", "Wireframing and prototyping", "Visual design"],
      icon: FaFigma,
    },
    {
      title: "Mobile App Development",
      description: "Creating cross-platform mobile applications with seamless performance and native feel.",
      features: ["React Native development", "Flutter development", "App store deployment"],
      icon: TbBrandReactNative,
    },
  ];

  const recentProjects = [
    {
      title: "E-commerce Platform",
      description: "A scalable e-commerce platform with real-time inventory management and payment integration.",
      techStack: ["React", "Node.js", "MongoDB"],
      imageSrc: "/ecommerce_project.png",
    },
    {
      title: "Social Media App",
      description: "A feature-rich social media application with real-time chat and media sharing capabilities.",
      techStack: ["Flutter", "Firebase", "GraphQL"],
      imageSrc: "/social_media_project.png",
    },
  ];
  return (
    <PageWrapper title="Homepage" description="Welcome to my portfolio website">
      {/* Hero Section */}
      <PageSection mt={[8, null, 10, 12]}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={[4, null, 5, 6, 8]} alignItems={"center"}>
          <Stack gap={[3, null, 4]}>
            <Box
              fontSize={12}
              fontWeight={"bold"}
              color={"#CBD5E1"}
              bgColor={"#F1F5F910"}
              px={[2, null, 2.5, 3]}
              py={1}
              borderRadius={"full"}
              w={"fit-content"}
              border={"1px solid #334155"}>
              AVAILABLE FOR NEW PROJECTS
            </Box>
            <Text fontSize={[56, null, 60, 64, 72]} fontWeight={"black"} color={"#F1F5F9"} lineHeight={"72px"}>
              I build{" "}
              <Text as={"span"} bgGradient={"linear-gradient(0deg, #94A3B8, #F1F5F9)"} bgClip="text">
                scalable web solutions.
              </Text>
            </Text>
            <Text fontSize={[15, null, 16, 18]} color={"#94A3B8"}>
              Experienced Front-end Software Engineer specialized in React, TypeScipt, React Native, Node.js, Express,
              and Mongo DB. I turn complex problems into high-performance digital products.
            </Text>
            <HStack gap={4} pt={10}>
              <Button variant={"primary"} size={["md", null, "lg"]}>
                Hire Me
              </Button>
              <Button variant={"outline"} size={["md", null, "lg"]}>
                View Projects
              </Button>
            </HStack>
          </Stack>
          <Flex flexDir={"column"} h={"full"} justifyContent={"center"} alignItems={"center"}>
            <Image
              src={HeroSnippet.src}
              w={["22rem", null, "24rem", "30rem"]}
              h={["12rem", null, "15rem"]}
              alt={"code snippet with tech stacks and role"}
            />
          </Flex>
        </SimpleGrid>
      </PageSection>
      {/* Trust Bar */}
      <Flex
        py={[6, null, 8, 10, 12]}
        px={[4, null, 5, 6, 7, 8]}
        borderY={"1px solid #1E293B"}
        w={"full"}
        align={"center"}
        justifyContent={"space-between"}
        gapY={[5, null, 4]}
        gapX={[3, null, 0]}
        flexWrap={"wrap"}>
        <Stack align={"center"} gap={1}>
          <Text fontSize={30} fontWeight={"black"} color={"#F1F5F9"}>
            6+
          </Text>
          <Text fontSize={12} fontWeight={"medium"} color={"#64748B"}>
            YEARS EXP
          </Text>
        </Stack>
        <Stack align={"center"} gap={1}>
          <Text fontSize={30} fontWeight={"black"} color={"#F1F5F9"}>
            20+
          </Text>
          <Text fontSize={12} fontWeight={"medium"} color={"#64748B"}>
            PROJECTS SHIPPED
          </Text>
        </Stack>
        <HStack align={"center"} gap={2}>
          <Icon as={RiNextjsFill} boxSize={6} color={"#999DA1"} />
          <Text fontSize={16} fontWeight={"bold"} color={"#999DA1"}>
            NextJS
          </Text>
        </HStack>
        <HStack align={"center"} gap={2}>
          <Icon as={FaReact} boxSize={6} color={"#999DA1"} />
          <Text fontSize={16} fontWeight={"bold"} color={"#999DA1"}>
            React
          </Text>
        </HStack>
        <HStack align={"center"} gap={2}>
          <Icon as={TbBrandReactNative} boxSize={6} color={"#999DA1"} />
          <Text fontSize={16} fontWeight={"bold"} color={"#999DA1"}>
            React Native
          </Text>
        </HStack>
        <HStack align={"center"} gap={2}>
          <Icon as={RiFlutterFill} boxSize={6} color={"#999DA1"} />
          <Text fontSize={16} fontWeight={"bold"} color={"#999DA1"}>
            Flutter
          </Text>
        </HStack>
        <HStack align={"center"} gap={2}>
          <Icon as={HiOutlineDatabase} boxSize={6} color={"#999DA1"} />
          <Text fontSize={16} fontWeight={"bold"} color={"#999DA1"}>
            MongoDB
          </Text>
        </HStack>
      </Flex>
      {/* Services Section */}
      <PageSection>
        <Text fontSize={[28, null, 32, 36]} fontWeight={"black"} color={"#F1F5F9"} textAlign={"center"}>
          Comprehensive Development Services
        </Text>
        <Text fontSize={[14, null, 15, 16]} color={"#94A3B8"} textAlign={"center"}>
          Tailored solutions designed to solve complex business challenges through modern technology.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={[5, null, 6, 8]} mt={[10, null, 12, 14, 16]}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
            />
          ))}
        </SimpleGrid>
      </PageSection>
      {/* Projects Section */}
      <PageSection>
        <Flex flexDir={["column", null, "row"]} align={"end"} justifyContent={"space-between"}>
          <Box>
            <Text fontSize={[28, null, 32, 36]} fontWeight={"black"} color={"#F1F5F9"}>
              Recent Projects
            </Text>
            <Text fontSize={[14, null, 15, 16]} color={"#94A3B8"}>
              A collection of technical solutions built with precision and modern best practices.
            </Text>
          </Box>
          <Link href={ROUTES.projects}>
            <HStack>
              <Text color={"#F1F5F9"} fontWeight={"medium"}>
                View All
              </Text>
              <Icon as={GoArrowRight} color={"#F1F5F9"} boxSize={[3, null, 4]} />
            </HStack>
          </Link>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={[5, null, 6, 8]} mt={[10, null, 12, 14, 16]}>
          {recentProjects.map((project, index) => (
            <HomeProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
            />
          ))}
        </SimpleGrid>
      </PageSection>
      {/* CTA */}
      <PageSection>
        <Stack
          borderRadius={24}
          bgGradient={"linear-gradient(25deg, #1E293B, #0F172A)"}
          py={[10, null, 14, 16, 20]}
          px={[8, null, 10, 12, 14]}
          gap={[4, null, 5, 6]}
          maxW={"60rem"}
          mx={"auto"}
          textAlign={"center"}
          align={"center"}>
          <Text fontSize={[32, null, 36, 40, 44]} fontWeight={"black"} color={"#F1F5F9"}>
            Ready to build something impactful?
          </Text>
          <Text fontSize={[16, null, 17, 18]} color={"#CBD5E1"} w={["full", null, "90%", "80%", "75%"]}>
            Let's discuss your project requirements and how we can turn your vision into a production-ready reality.
          </Text>
          <Button variant={"white"} size={"xl"}>
            Hire Me
          </Button>
        </Stack>
      </PageSection>
    </PageWrapper>
  );
}
