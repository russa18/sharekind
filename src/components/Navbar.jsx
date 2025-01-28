import { Flex, HStack, Link, Text, Button, Image } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Link as RouterLink } from "react-router";
import shareKindLogo from "/src/assets/images/sharekind-logo-s.png";

import { MdLogout, MdOutlineSettingsSuggest } from "react-icons/md";
const Navbar = () => {
  return (
    <Flex
      p="4"
      bgColor="yellow.400"
      gap="4"
      justifyContent="space-between"
      alignItems="center"
      bgImage="linear-gradient({colors.yellow.500}, {colors.yellow.200})"
      h={{ base: "5vh", lg: "10vh" }}
    >
      <Link
        as={RouterLink}
        to="/"
        outline="none"
        display={{ base: "block", sm: "none" }}
      >
        <Image
          src={shareKindLogo}
          alt="shareKind"
          objectFit="cover"
          w="3rem"
          h="3rem"
          bg="white"
        />
      </Link>
      <Text textStyle={{ base: "lg", md: "2xl" }} color="pink.500">
        <Text
          as="span"
          display={{ base: "none", md: "inline" }} // Hide on mobile, show on larger screens
        >
          Worldwide Kindness:
        </Text>
        <Tooltip content="Worldwide Kindness" hideFrom="sm">
          <Text as="span" fontWeight="bold">
            598 +
          </Text>
        </Tooltip>
      </Text>
      <HStack textStyle="sm">
        <Link
          href="https://www.chakra-ui.com/docs/components/"
          color="white"
          _hover={{ textDecoration: "none", color: "white" }}
        >
          About
        </Link>
        <ColorModeButton
          size={{ base: "xs", md: "xl" }}
          color="orange.500"
          _hover={{ bg: "none" }}
        />

        <Link
          to="/settings"
          as={RouterLink}
          p="1"
          borderRadius="md"
          color="black"
          hideFrom="sm"
        >
          <MdOutlineSettingsSuggest size="1.5rem" />
        </Link>
        <Button
          variant="plain"
          w="fit-content"
          color="black"
          hideFrom="sm"
          size="xs"
        >
          <MdLogout />
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
