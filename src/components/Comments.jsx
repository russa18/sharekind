import { Flex, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Link } from "react-router";

import React from "react";

const Comments = () => {
  return (
    <Flex direction="column" my="10">
      <Flex alignItems="top" mb="2">
        <Avatar
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
          size="xs"
        />

        <Stack ms="4">
           <Link to="/profile" outline="none">Rushikesh sawant mandrekar ashevme mandremee </Link>
          <Text textStyle="xs">25-01-2025</Text>
        </Stack>
      </Flex>
      <Text  textStyle="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum,
        minus fuga maxime ab quidem sapiente harum doloribus veniam hic aut odit
        neque repudiandae distinctio corrupti! Debitis placeat eius officia
        ipsam suscipit.
      </Text>
    </Flex>
  );
};

export default Comments;
