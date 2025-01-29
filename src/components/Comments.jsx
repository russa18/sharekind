import { Flex, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Link } from "react-router";

import React from "react";

const Comments = ({ commentData }) => {
  return (
    <Flex direction="column" my="8">
      <Flex alignItems="top" mb="2">
        <Avatar
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
          size="xs"
        />

        <Stack ms="4">
          <Link to="/profile" outline="none">
            Rushikesh sawant
          </Link>
          <Text textStyle="xs">{commentData?.createdAt}</Text>
        </Stack>
      </Flex>
      <Text textStyle="sm">{commentData?.text}</Text>
    </Flex>
  );
};

export default Comments;
