import React, { useEffect, useRef, useState } from "react";
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
  const pageRef = useRef<HTMLDivElement | null>(null);
  const categories = ["All", "Web Apps", "Mobile"];

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
          .from(".projects-hero-title", { opacity: 0, y: 18, duration: 0.5 })
          .from(".projects-hero-subtitle", { opacity: 0, y: 16, duration: 0.45 }, "-=0.2")
          .from(".projects-filter-chip", { opacity: 0, y: 12, stagger: 0.07, duration: 0.35 }, "-=0.2");

        const revealOnScroll = (selector: string, y = 24) => {
          gsap.utils.toArray<HTMLElement>(selector).forEach((item) => {
            gsap.from(item, {
              opacity: 0,
              y,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            });
          });
        };

        revealOnScroll(".projects-list-item", 24);
        revealOnScroll(".projects-cta", 20);
      }, pageRef);

      cleanup = () => ctx.revert();
    };

    initAnimations();

    return () => {
      isMounted = false;
      cleanup?.();
    };
  }, [category]);

  return (
    <PageWrapper
      title="Projects"
      description="A showcase of technical excellence and user-centric design solutions across modern web and mobile ecosystems.">
      <Box ref={pageRef}>
        <PageSection>
          <Text
            className={"projects-hero-title"}
            fontSize={[40, null, 48, 54, 60]}
            fontWeight={"black"}
            color={"#F1F5F9"}>
            Selected Projects
          </Text>
          <Text
            className={"projects-hero-subtitle"}
            fontSize={[16, null, 17, 18]}
            color={"#94A3B8"}
            w={["full", null, "70%", "60%", "55%"]}>
            A showcase of technical excellence and user-centric design solutions across modern web and mobile
            ecosystems.
          </Text>
          <HStack mt={6} gap={2} borderBottom={"1px solid #1E293B"} pb={[3, null, 4]}>
            {categories.map((cat, i) => (
              <Box
                key={i}
                className={"projects-filter-chip"}
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
                <Box key={index} className={"projects-list-item"}>
                  <ProjectCard
                    id={id}
                    title={title}
                    description={description}
                    techStack={techStack}
                    imageSrc={thumbnailImg}
                    gifSrc={thumbnailGif}
                  />
                </Box>
              ))}
          </SimpleGrid>
        </PageSection>
        {/* CTA */}
        <PageSection bgColor={"#0F172A50"}>
          <Stack
            className={"projects-cta"}
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
            <Link href={ROUTES.hireme}>
              <Button variant={"primary"} size={"lg"}>
                Hire Me
              </Button>
            </Link>
          </Stack>
        </PageSection>
      </Box>
    </PageWrapper>
  );
};

export default ProjectsPage;
