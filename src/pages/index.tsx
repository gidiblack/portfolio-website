import { Box, HStack, SimpleGrid, Stack, Text, Flex, Image, Icon } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
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
import { allProjects } from "@/constants";

export default function Home() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let isMounted = true;
    let cleanup: (() => void) | undefined;

    const initAnimations = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (!isMounted || !pageRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const introTimeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        introTimeline
          .from(".hero-badge", { opacity: 0, y: 16, duration: 0.45 })
          .from(".hero-title", { opacity: 0, y: 20, duration: 0.55 }, "-=0.2")
          .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.5 }, "-=0.25")
          .from(".hero-actions > *", { opacity: 0, y: 14, stagger: 0.1, duration: 0.4 }, "-=0.15")
          .from(".hero-image", { opacity: 0, y: 18, duration: 0.5 }, "-=0.25")
          .from(".trust-item", { opacity: 0, y: 10, stagger: 0.05, duration: 0.3 }, "-=0.15");

        const revealOnScroll = (selector: string, y = 28) => {
          gsap.utils.toArray<HTMLElement>(selector).forEach((item) => {
            gsap.from(item, {
              opacity: 0,
              y,
              duration: 0.55,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
          });
        };

        revealOnScroll(".service-section-title", 20);
        revealOnScroll(".service-card", 26);
        revealOnScroll(".project-section-title", 20);
        revealOnScroll(".project-card", 26);
        revealOnScroll(".cta-section", 20);
      }, pageRef);

      cleanup = () => ctx.revert();
    };

    initAnimations();

    return () => {
      isMounted = false;
      cleanup?.();
    };
  }, []);

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
  return (
    <PageWrapper title="Homepage" description="Welcome to my portfolio website">
      <Box ref={pageRef}>
        {/* Hero Section */}
        <PageSection mt={[8, null, 10, 12]}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={[4, null, 5, 6, 8]} alignItems={"center"}>
            <Stack gap={[3, null, 4]}>
              <Box
                className={"hero-badge"}
                fontSize={[10, null, 11, 12]}
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
              <Text
                className={"hero-title"}
                fontSize={[56, null, 60, 64, 72]}
                fontWeight={"black"}
                color={"#F1F5F9"}
                lineHeight={["56px", null, "60px", "64px", "72px"]}>
                I build{" "}
                <Text as={"span"} bgGradient={"linear-gradient(0deg, #94A3B8, #F1F5F9)"} bgClip="text">
                  scalable web solutions.
                </Text>
              </Text>
              <Text className={"hero-subtitle"} fontSize={[15, null, 16, 18]} color={"#94A3B8"}>
                Experienced Front-end Software Engineer specialized in React, TypeScipt, React Native, Node.js, Express,
                and Mongo DB. I turn complex problems into high-performance digital products.
              </Text>
              <HStack className={"hero-actions"} gap={[3, null, 4]} pt={[4, null, 6, 8, 10]}>
                <Link href={ROUTES.hireme}>
                  <Button variant={"primary"} size={["md", null, "lg"]}>
                    Hire Me
                  </Button>
                </Link>
                <Link href={ROUTES.projects}>
                  <Button variant={"outline"} size={["md", null, "lg"]}>
                    View Projects
                  </Button>
                </Link>
              </HStack>
            </Stack>
            <Flex
              className={"hero-image"}
              flexDir={"column"}
              h={"full"}
              justifyContent={"center"}
              alignItems={"center"}>
              <Image
                src={HeroSnippet.src}
                w={["22rem", null, "28rem", "30rem"]}
                h={["12rem", null, "16rem", "15rem"]}
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
          <Stack className={"trust-item"} align={"center"} gap={1}>
            <Text fontSize={30} fontWeight={"black"} color={"#F1F5F9"}>
              6+
            </Text>
            <Text fontSize={12} fontWeight={"medium"} color={"#64748B"}>
              YEARS EXP
            </Text>
          </Stack>
          <Stack className={"trust-item"} align={"center"} gap={1}>
            <Text fontSize={30} fontWeight={"black"} color={"#F1F5F9"}>
              20+
            </Text>
            <Text fontSize={12} fontWeight={"medium"} color={"#64748B"}>
              PROJECTS SHIPPED
            </Text>
          </Stack>
          <HStack className={"trust-item"} align={"center"} gap={2}>
            <Icon as={RiNextjsFill} boxSize={6} color={"#999DA1"} />
            <Text fontSize={16} fontWeight={"bold"} color={"#999DA1"}>
              NextJS
            </Text>
          </HStack>
          <HStack className={"trust-item"} align={"center"} gap={2}>
            <Icon as={FaReact} boxSize={6} color={"#999DA1"} />
            <Text fontSize={16} fontWeight={"bold"} color={"#999DA1"}>
              React
            </Text>
          </HStack>
          <HStack className={"trust-item"} align={"center"} gap={2}>
            <Icon as={TbBrandReactNative} boxSize={6} color={"#999DA1"} />
            <Text fontSize={16} fontWeight={"bold"} color={"#999DA1"}>
              React Native
            </Text>
          </HStack>
          <HStack className={"trust-item"} align={"center"} gap={2}>
            <Icon as={RiFlutterFill} boxSize={6} color={"#999DA1"} />
            <Text fontSize={16} fontWeight={"bold"} color={"#999DA1"}>
              Flutter
            </Text>
          </HStack>
          <HStack className={"trust-item"} align={"center"} gap={2}>
            <Icon as={HiOutlineDatabase} boxSize={6} color={"#999DA1"} />
            <Text fontSize={16} fontWeight={"bold"} color={"#999DA1"}>
              MongoDB
            </Text>
          </HStack>
        </Flex>
        {/* Services Section */}
        <PageSection id={"services"}>
          <Text
            className={"service-section-title"}
            fontSize={[28, null, 32, 36]}
            fontWeight={"black"}
            color={"#F1F5F9"}
            textAlign={"center"}>
            Comprehensive Development Services
          </Text>
          <Text
            className={"service-section-title"}
            fontSize={[14, null, 15, 16]}
            color={"#94A3B8"}
            textAlign={"center"}>
            Tailored solutions designed to solve complex business challenges through modern technology.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={[5, null, 6, 8]} mt={[10, null, 12, 14, 16]}>
            {services.map((service, index) => (
              <Box key={index} className={"service-card"}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  icon={service.icon}
                />
              </Box>
            ))}
          </SimpleGrid>
        </PageSection>
        {/* Projects Section */}
        <PageSection id={"projects"}>
          <Flex
            className={"project-section-title"}
            flexDir={["column", null, "row"]}
            align={"end"}
            justifyContent={"space-between"}>
            <Box>
              <Text fontSize={[28, null, 32, 36]} fontWeight={"black"} color={"#F1F5F9"}>
                Recent Projects
              </Text>
              <Text fontSize={[14, null, 15, 16]} color={"#94A3B8"}>
                A collection of technical solutions built with precision and modern best practices.
              </Text>
            </Box>
            <Link href={ROUTES.projects}>
              <HStack className={"group"}>
                <Text color={"#F1F5F9"} fontWeight={"medium"} _groupHover={{ color: "#DE9E2C" }}>
                  View All
                </Text>
                <Icon as={GoArrowRight} color={"#F1F5F9"} boxSize={[3, null, 4]} _groupHover={{ color: "#DE9E2C" }} />
              </HStack>
            </Link>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={[5, null, 6, 8, 10]} mt={[10, null, 12, 14, 16]}>
            {allProjects.slice(0, 4).map(({ title, description, techStack, thumbnailImg, id, thumbnailGif }, i) => (
              <Box key={i} className={"project-card"}>
                <HomeProjectCard
                  id={id}
                  title={title}
                  description={description}
                  techStack={techStack}
                  imageSrc={thumbnailGif ? thumbnailGif : thumbnailImg}
                />
              </Box>
            ))}
          </SimpleGrid>
        </PageSection>
        {/* CTA */}
        <PageSection>
          <Stack
            className={"cta-section"}
            borderRadius={24}
            bgGradient={"linear-gradient(25deg, #1E293B, #0F172A)"}
            py={[10, null, 14, 16, 20]}
            px={[8, null, 10, 12, 14]}
            gap={[4, null, 5, 6]}
            maxW={"60rem"}
            mx={"auto"}
            textAlign={"center"}
            align={"center"}>
            <Text fontSize={[28, null, 36, 40, 44]} fontWeight={"black"} color={"#F1F5F9"}>
              Ready to build something impactful?
            </Text>
            <Text fontSize={[16, null, 17, 18]} color={"#CBD5E1"} w={["full", null, "90%", "80%", "75%"]}>
              Let's discuss your project requirements and how we can turn your vision into a production-ready reality.
            </Text>
            <Link href={ROUTES.hireme}>
              <Button variant={"primary"} size={["md", null, "lg"]}>
                Hire Me
              </Button>
            </Link>
          </Stack>
        </PageSection>
      </Box>
    </PageWrapper>
  );
}
