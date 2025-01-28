import Homecard from "@/components/Homecard";
import { Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Stack divideY="2px" divideColor="pink.400" color="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "center" }}
        m="auto"
        my="2rem"
      >
        <Image
          rounded="full"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          w="200px"
          h="200px"
          name="Dan Abramov"
          colorPalette="teal"
        />
        <Stack ms={{ base: "0", md: "5rem" }} w={{ base: "auto", lg: "500px" }}>
          <Text
            my="2rem"
            textStyle="2xl"
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }}
          >
            Dan Abramov
          </Text>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap="6"
            overflowX="hidden"
            w="full"
            mb="1rem"
          >
            <Stack textAlign="center">
              <Text>31</Text>
              <Text>posts</Text>
            </Stack>
            <Stack textAlign="center">
              <Text>14</Text>
              <Text>followers</Text>
            </Stack>
            <Stack textAlign="center">
              <Text>47</Text>
              <Text>following</Text>
            </Stack>
          </Grid>
          <Stack>
            Learning Blender Join me on my journey 😄 Checkout my YouTube
            channel 👇 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Cum, a aliquid deserunt beatae officia ipsam! Velit, nam magni
            aliquid rem cum est soluta ex eius, assumenda, quae impedit expedita
            non tempora. Suscipit. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Culpa necessitatibus id quisquam quam inventore,
            ducimus ullam ex possimus atque, perspiciatis eligendi? Quibusdam et
            quo optio tenetur sapiente nam architecto doloribus dolorem rem.
          </Stack>
        </Stack>
      </Flex>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", // Single column for small screens (mobile)
          md: "repeat(2, 1fr)", // Two columns for small screens
          lg: "repeat(3, 1fr)",
        }}
        gap="2"
        overflowX="hidden"
        w="full"
        pt="1rem"
      >
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
    </Stack>
  );
};

export default Profile;
