import Homecard from "@/components/Homecard";
import { Flex, } from "@chakra-ui/react";
const Home = () => {
  return (
    <Flex
      direction="column"
      // alignItems="center"
      overflowX="hidden"
      pl={{ base: "0", md: "2rem" }}
      w={{
        base: "full", // Single column for small screens (mobile)
        md: "full", // Two columns for small screens
        lg: "1/2",
      }}
    >
      <Homecard isHome="true" />
      <Homecard isHome="true" />
      <Homecard isHome="true" />
      <Homecard isHome="true" />
      <Homecard isHome="true" />
      <Homecard isHome="true" />
    </Flex>
  );
};

export default Home;
