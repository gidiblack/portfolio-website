import { Box, HStack, SimpleGrid, Stack, Text, Flex, Image, Icon } from "@chakra-ui/react";
import PageSection from "@/components/layout/PageSection";
import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/button";
import HeroSnippet from "@/assets/stack-snippet.png";
import { RiFlutterFill, RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbBrandReactNative } from "react-icons/tb";

export default function Home() {
  return (
    <PageWrapper title="Homepage" description="Welcome to my portfolio website">
      {/* Hero Section */}
      <PageSection mt={[8, null, 10, 12]}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={[4, null, 5, 6, 8]} alignItems={"center"}>
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
              I build scalable web solutions.
            </Text>
            <Text fontSize={[15, null, 16, 18]} color={"#94A3B8"}>
              Experienced Front-end Software Engineer specialized in React, TypeScipt, React Native, Node.js, Express,
              and Mongo DB. I turn complex problems into high-performance digital products.
            </Text>
            <HStack gap={4} pt={10}>
              <Button variant={"primary"} size={"lg"} px={10} py={4}>
                Hire Me
              </Button>
              <Button variant={"outline"} size={"lg"} px={10} py={4}>
                View Projects
              </Button>
            </HStack>
          </Stack>
          <Flex flexDir={"column"} h={"full"} justifyContent={"center"} alignItems={"center"}>
            <Image src={HeroSnippet.src} w={"30rem"} h={"15rem"} alt={"code snippet with tech stacks and role"} />
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
        justifyContent={"space-between"}>
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
    </PageWrapper>
  );
}
