import shareKindLogo from "/src/assets/images/sharekind-logo-s.png";
import { Link as RouterLink, useLocation } from "react-router";
import { Flex, Button, Text, Link, Image,  Box } from "@chakra-ui/react";
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

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <Flex
      as="nav"
      direction="column"
      justifyContent="space-between"
      hideBelow="sm"
      sm={{ w: "80px" }}
      // lg={{w:"80px"}}
      xl={{ w: "250px" }}
      h="100vh"
      // bg="gray.800"
      color="white"
      p="4"
      pt="0"
      borderRightWidth="1px"
      borderRightColor="#FF69B4"
      bgImage="linear-gradient({colors.black}, {colors.gray.700})"
      // position="fixed"
    >
      <Flex direction="column" textStyle="md">
        <Link as={RouterLink} to="/" outline="none">
          <Image
            src={shareKindLogo}
            alt="shareKind"
            objectFit={{ sm: "contain", xl: "cover" }}
            w="8rem"
            h="6rem"
            mx="auto"
            mb="3rem"
          />
        </Link>

        <DialogRoot>
          <DialogTrigger asChild>
            <Box
              as="button"
              variant="plain"
              mb="4"
              _hover={{ textDecoration: "none", bg: "gray.700" }}
              p="2"
              borderRadius="md"
              display="flex"
              alignItems="center"
            >
              <IoAddCircleOutline size="1.5rem" />
              <Text
                ms="10px"
                hideBelow="sm"
                display={{ sm: "none", xl: "block" }}
              >
                Create
              </Text>
            </Box>
          </DialogTrigger>
          <CreatePostDialog />
        </DialogRoot>
        <Link
          as={RouterLink}
          to="/"
          mb="4"
          _hover={{ textDecoration: "none", bg: "gray.700" }}
          p="2"
          borderRadius="md"
          bg={isActive("/") ? "gray.700" : "transparent"}
          color={isActive("/") ? "yellow.400" : "inherit"}
        >
          <Flex>
            <FaHome size="1.5rem" />
            <Text ms="10px" display={{ sm: "none", xl: "block" }}>
              Home
            </Text>
          </Flex>
        </Link>

        <Link
          as={RouterLink}
          to="/explore"
          mb="4"
          _hover={{ textDecoration: "none", bg: "gray.700" }}
          p="2"
          borderRadius="md"
          bg={isActive("/explore") ? "gray.700" : "transparent"}
          color={isActive("/explore") ? "yellow.400" : "inherit"}
        >
          <Flex>
            <MdOutlineExplore size="1.5rem" />

            <Text ms="10px" display={{ sm: "none", xl: "block" }}>
              Explore
            </Text>
          </Flex>
        </Link>
        {/* <Link
          href="/about"
          mb="4"
          _hover={{ textDecoration: "none", bg: "gray.700" }}
          p="2"
          borderRadius="md"
        >
          <Flex alignItems="center" mx="auto">
            <FaSearch size="1.5rem" />
            <Text ms="10px">Search</Text>
          </Flex>
        </Link> */}

        <DialogRoot>
          <DialogTrigger asChild>
            <Box
              as="button"
              variant="plain"
              mb="4"
              _hover={{ textDecoration: "none", bg: "gray.700" }}
              p="2"
              borderRadius="md"
              display="flex"
              alignItems="center"
            >
              <FaSearch size="1.5rem" />
              <Text ms="10px" display={{ sm: "none", xl: "block" }}>
                Search
              </Text>
            </Box>
          </DialogTrigger>
          <SeachDialog />
        </DialogRoot>

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

            <Text ms="10px" display={{ sm: "none", xl: "block" }}>
              Settings
            </Text>
          </Flex>
        </Link>

        <Link
          to="/profile"
          as={RouterLink}
          mb="4"
          _hover={{ textDecoration: "none", bg: "gray.700" }}
          p="2"
          borderRadius="md"
          bg={isActive("/profile") ? "gray.700" : "transparent"}
          color={isActive("/profile") ? "yellow.400" : "inherit"}
        >
          <Flex>
            <Avatar
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
              size="xs"
            />

            <Text ms="10px" display={{ sm: "none", xl: "block" }}>
              Profile
            </Text>
          </Flex>
        </Link>
      </Flex>

      <Button variant="surface" w="fit-content" mx="auto">
        <MdLogout />
        <Text display={{ sm: "none", xl: "block" }}>Logout</Text>
      </Button>
    </Flex>
  );
};

export default Sidebar;
