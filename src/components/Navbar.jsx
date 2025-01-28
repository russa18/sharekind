import {  Flex, HStack, Link, Text } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

const Navbar = () => {
  return (
    <Flex
      p="4"
      bgColor="yellow.400"
      gap="4"
      justifyContent="space-between"
      alignItems="center"
      bgImage="linear-gradient({colors.yellow.500}, {colors.yellow.200})"
      h={{base:"5vh",md:"10vh"}}
    >
      <Text textAlign="center" textStyle={{base:"lg",md:"2xl"}} color="pink.500">
        Worldwide Kindness:{" "}
        <Text as="span" fontWeight="bold">
          598 +
        </Text>
      </Text>
      <HStack textStyle="sm">
        <Link
          href="https://www.chakra-ui.com/docs/components/"
          color="white"
          _hover={{ textDecoration: "none", color: "white" }}
        >
          About
        </Link>
        <ColorModeButton size={{base:"xs",md:"xl"}}  color="orange.500" _hover={{bg:"none"}} />
      </HStack>
    </Flex>
  );
};

export default Navbar;
