import React, { useState, useCallback, useEffect } from "react";
import {
  Drawer,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  useDisclosure,
  VStack,
  Button as ChakraButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import NextImage from "next/image";
import logo from "../../../public/logo-icon.png";
import { ROUTES } from "@/constants/routes";
import useWindowDimensions from "@/helpers/useWindowDimensions";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "../ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { width } = useWindowDimensions();
  const router = useRouter();
  const { open, onClose, onToggle, setOpen } = useDisclosure();
  const currentPath = router.asPath.split("?")[0];

  const changeBg = useCallback(() => {
    if (width && width >= 512 && width < 1000) {
      if (window.scrollY >= 56) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    } else if (width && width >= 1000) {
      if (window.scrollY >= 72) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    } else {
      if (window.scrollY >= 32) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  }, [width]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    changeBg();
    window.addEventListener("scroll", changeBg);

    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, [changeBg]);

  const NAV_ITEMS = [
    {
      label: "Home",
      href: ROUTES.home,
    },
    {
      label: "Projects",
      href: ROUTES.projects,
    },
    {
      label: "Services",
      href: ROUTES.services,
    },
  ];

  const NavItem = ({ label, href }: { label: string; href: string }) => (
    <Link
      asChild
      _hover={{ borderBottom: "1.5px solid #DE9E2C" }}
      borderBottom={href === currentPath ? "1.5px solid #DE9E2C" : "none"}
      transition={"all 0.25s ease-in-out"}
      p={2}
      className={"group"}>
      <NextLink href={href}>
        <Text
          fontSize={14}
          fontWeight={"medium"}
          color={href === currentPath ? "#DE9E2C" : "#F1F5F9"}
          _groupHover={{ color: "#DE9E2C" }}
          transition={"all 0.25s ease-in-out"}>
          {label}
        </Text>
      </NextLink>
    </Link>
  );

  return (
    <>
      <Flex
        as={"nav"}
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={"sticky"}
        w={"full"}
        border={"1px solid #1E293B"}
        boxShadow={"xs"}
        justify={"center"}
        bg={scrolled ? "#16191C" : "transparent"}>
        <Flex
          w={"full"}
          maxW={{ base: "100vw", "2xl": "90rem" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={[5, null, 6, 8, 10]}
          py={[2.5, null, 3, 4]}>
          <Link href={ROUTES.home}>
            <HStack gap={1}>
              <Image asChild boxSize={{ base: 4, md: 5, lg: 6 }} position={"relative"} objectFit={"contain"}>
                <NextImage src={logo.src} alt="gideon's logo" width={24} height={24} />
              </Image>
              <Text fontSize={[16, null, 18, 20]} fontWeight={"bold"} color={"#DE9E2C"}>
                Gideon E.
              </Text>
            </HStack>
          </Link>
          <HStack gap={6} display={{ base: "none", md: "flex" }}>
            {NAV_ITEMS.map(({ label, href }, i) => (
              <NavItem key={i} label={label} href={href} />
            ))}
          </HStack>
          <HStack>
            <Link href={ROUTES.hireme} display={{ base: "none", md: "inline-flex" }}>
              <Button size={"sm"}>Hire Me</Button>
            </Link>
            <Flex
              onClick={onToggle}
              display={["inline-flex", null, "none"]}
              aria-label={"Toggle Navigation"}
              role={"button"}
              tabIndex={0}
              cursor={"pointer"}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onToggle();
                }
              }}>
              {open ? (
                <Icon as={AiOutlineClose} boxSize={5} color={scrolled ? "initial" : "white"} />
              ) : (
                <Icon as={AiOutlineMenu} boxSize={5} color={scrolled ? "initial" : "white"} />
              )}
            </Flex>
          </HStack>
        </Flex>
      </Flex>

      <Drawer.Root open={open} placement={"top"} onOpenChange={(details) => setOpen(details.open)}>
        <Drawer.Backdrop bg={"blackAlpha.700"} display={{ base: "block", md: "none" }} />
        <Drawer.Positioner display={{ base: "flex", md: "none" }}>
          <Drawer.Content bg={"#16191C"} borderBottom={"1px solid #1E293B"} maxW={"full"}>
            <Flex justifyContent={"space-between"} alignItems={"center"} pl={4} py={2} pr={12}>
              <Link href={ROUTES.home}>
                <HStack gap={1}>
                  <Image asChild boxSize={{ base: 4, md: 5, lg: 6 }} position={"relative"} objectFit={"contain"}>
                    <NextImage src={logo.src} alt="gideon's logo" width={24} height={24} />
                  </Image>
                  <Text fontSize={[16, null, 18, 20]} fontWeight={"bold"} color={"#DE9E2C"}>
                    Gideon E.
                  </Text>
                </HStack>
              </Link>
              <Link href={ROUTES.hireme} display={{ base: "inline-flex", md: "none" }}>
                <Button size={"sm"}>Hire Me</Button>
              </Link>
            </Flex>
            <Drawer.CloseTrigger asChild top={2} right={3} color={"#F1F5F9"} aria-label={"Close navigation menu"}>
              <ChakraButton variant={"ghost"} minW={"auto"} p={1}>
                <Icon as={AiOutlineClose} boxSize={5} />
              </ChakraButton>
            </Drawer.CloseTrigger>

            <Drawer.Body py={2}>
              <VStack align={"stretch"} gap={1}>
                {NAV_ITEMS.map(({ label, href }) => (
                  <Link
                    key={href}
                    asChild
                    onClick={onClose}
                    px={4}
                    py={2.5}
                    borderRadius={8}
                    color={"#F1F5F9"}
                    fontWeight={"medium"}
                    _hover={{ bg: "#1E293B", color: "#DE9E2C" }}>
                    <NextLink href={href}>{label}</NextLink>
                  </Link>
                ))}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
};

export default Navbar;
