import Homecard from "@/components/Homecard";
import {  Grid } from "@chakra-ui/react";

const Explore = () => {
  return (
    <Grid templateColumns={{
      base: "repeat(1, 1fr)", // Single column for small screens (mobile)
      md: "repeat(2, 1fr)",   // Two columns for small screens
      lg: "repeat(3, 1fr)",   // Three columns for medium screens (tablet)
      
    }}
    gap="6"
    overflowX="hidden"
    w="full">
      <Homecard />
      <Homecard />
      <Homecard />
      <Homecard />
      <Homecard />
      <Homecard />
      <Homecard />
      <Homecard />
      <Homecard />
      <Homecard />
    </Grid>
  );
};

export default Explore;
