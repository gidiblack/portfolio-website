import { Box, HStack, SimpleGrid, Stack, Text, Flex, Image } from "@chakra-ui/react";
import PageSection from "@/components/layout/PageSection";
import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/button";
import HeroSnippet from "@/assets/stack-snippet.png";

export default function Home() {
  return (
    <PageWrapper title="Homepage" description="Welcome to my portfolio website">
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
    </PageWrapper>
  );
}
