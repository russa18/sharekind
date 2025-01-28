import { Flex, Link } from "@chakra-ui/react";
const Footer = () => {
  return (
    <Flex p="4" bgColor="pink.400"  gap="4" justifyContent="center">
      <Link href="https://www.chakra-ui.com/docs/components/" color="gray.700"  _hover={{ textDecoration: "none", color: "white" }}>About</Link>
      <Link href="https://www.chakra-ui.com/docs/components/" color="gray.700"  _hover={{ textDecoration: "none", color: "white" }}>Privacy</Link>
      <Link href="https://www.chakra-ui.com/docs/components/" color="gray.700"  _hover={{ textDecoration: "none", color: "white" }}>Help</Link>
    </Flex>
  );
};

export default Footer;
