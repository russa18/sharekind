import { Link as RouterLink, useLocation } from "react-router";
import { Flex, Button, Text, Link, Box } from "@chakra-ui/react";
import { DialogRoot, DialogTrigger } from "@/components/ui/dialog";

import { FaHome, FaSearch } from "react-icons/fa";
import {
  MdOutlineExplore,
  MdOutlineSettingsSuggest,
  MdLogout,
} from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";

import SeachDialog from "./SeachDialog";
import CreatePostDialog from "./CreatePostDialog";
import { Avatar } from "@/components/ui/avatar";

const MobileNavbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Flex
      as="nav"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      h="10vh"
      // bg="gray.800"
      color="white"
      p="4"
      borderRightWidth="1px"
      borderRightColor="#FF69B4"
      bgImage="black"
      hideFrom="sm"
    >
      <Flex
        direction="row"
        textStyle="md"
        alignItems="center"
        justify="space-between"
        w="full"
      >
        <Link
          as={RouterLink}
          to="/"
          // mb="4"
          _hover={{ textDecoration: "none", bg: "gray.700" }}
          p="2"
          borderRadius="full"
          bg={isActive("/") ? "gray.700" : "transparent"}
          color={isActive("/") ? "yellow.400" : "inherit"}
        >
          <Flex>
            <FaHome size="1.5rem" color="white"/>
          </Flex>
        </Link>

        <Link
          as={RouterLink}
          to="/explore"
          // mb="4"
          _hover={{ textDecoration: "none", bg: "gray.700" }}
          p="2"
          borderRadius="full"
          bg={isActive("/explore") ? "gray.700" : "transparent"}
          color={isActive("/explore") ? "yellow.400" : "inherit"}
        >
          <Flex>
            <MdOutlineExplore size="1.5rem" />
          </Flex>
        </Link>
        <DialogRoot>
          <DialogTrigger asChild>
            <Box
              as="button"
              variant="plain"
              // mb="4"
              _hover={{ textDecoration: "none", bg: "gray.700" }}
              p="2"
              borderRadius="full"
              display="flex"
              alignItems="center"
            >
              <IoAddCircleOutline size="2.5rem" />
            </Box>
          </DialogTrigger>
          <CreatePostDialog />
        </DialogRoot>
        <DialogRoot>
          <DialogTrigger asChild>
            <Box
              as="button"
              variant="plain"
              // mb="4"
              _hover={{ textDecoration: "none", bg: "gray.700" }}
              p="2"
              borderRadius="full"
              display="flex"
              alignItems="center"
            >
              <FaSearch size="1rem" />
            </Box>
          </DialogTrigger>
          <SeachDialog />
        </DialogRoot>
        {/* 
        <Link
          to="/settings"
          as={RouterLink}
          mb="4"
          _hover={{ textDecoration: "none", bg: "gray.700" }}
          p="2"
          borderRadius="md"
          bg={isActive("/settings") ? "gray.700" : "transparent"}
          color={isActive("/settings") ? "yellow.400" : "inherit"}
        >
          <Flex>
            <MdOutlineSettingsSuggest size="1.5rem" />

            <Text ms="10px" display={{ base: "none", xl: "block" }}>
              Settings
            </Text>
          </Flex>
        </Link> */}

        <Link
          to="/profile"
          as={RouterLink}
          // mb="4"
          _hover={{ textDecoration: "none", bg: "gray.700" }}
          p="2"
          borderRadius="full"
          bg={isActive("/profile") ? "gray.700" : "transparent"}
          color={isActive("/profile") ? "yellow.400" : "inherit"}
        >
          <Flex>
            <Avatar
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
              size="xs"
            />
          </Flex>
        </Link>
        {/* <Button variant="surface" w="fit-content"  >
          <MdLogout />
          <Text display={{ base: "none", xl: "block" }}>Logout</Text>
        </Button> */}
      </Flex>
    </Flex>
  );
};

export default MobileNavbar;
