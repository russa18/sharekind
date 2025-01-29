import { Card, Flex, Text, Button, Grid, Box } from "@chakra-ui/react";
import { FaHandHoldingHeart, FaRegComment, FaShare } from "react-icons/fa";

import { Avatar } from "@/components/ui/avatar";
import { Link } from "react-router";
import FullPostCard from "./FullPostCard";
import { useState } from "react";

const Homecard = ({ isHome, data }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function showPost() {
    setIsDialogOpen(true);
  }
// console.log(data?.comments?.length);

  return (
    <>
      <Card.Root
        width="auto"
        my="10px"
        borderColor="#644d5f"
        _hover={{ cursor: "pointer" }}
        onClick={showPost}
      >
        <Card.Body gap="2">
          <Flex>
            <Avatar
              src="https://picsum.photos/200/300"
              name="Nue Camp"
              size="lg"
              shape="rounded"
            />
            <Flex direction="row" justifyContent="space-between" w="full">
              <Flex direction="column" ms="4">
                <Card.Title>
                  <Link to="/profile">Nue Camp</Link>
                </Card.Title>
                <Text textStyle="xs">24-01-2025</Text>
              </Flex>
              {!isHome && (
                <Button
                  variant="plain"
                  _hover={{ color: "yellow", textDecoration: "none" }}
                  w="fit"
                >
                  + Follow
                </Button>
              )}
            </Flex>
          </Flex>

          <Box my="1rem">
            <Text mb="1rem" fontWeight="bold" textStyle="lg">
              {data?.title}
            </Text>

            <Box as="span">
              {(() => {
                const titleWords = data?.title?.split(" ") || [];
                const postWords = data?.postText?.split(" ") || [];
                const totalWords = [...titleWords, ...postWords];

                return totalWords.length > 60
                  ? totalWords.slice(0, 60).join(" ") + " ..."
                  : totalWords.join(" ");
              })()}
            </Box>
          </Box>
        </Card.Body>
        <Card.Footer
          justifyContent="center"
          alignItems="flex-start"
          borderTopWidth="1px"
          borderTopColor="pink.400"
          pt="4"
        >
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={{ base: "2", sm: "6" }}
            w="full"
          >
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              _hover={{ cursor: "pointer", opacity: "0.7" }}
              transition="opacity 0.2s ease-in-out"
            >
              <FaHandHoldingHeart color="red" size="1.5rem" />
              <Text textStyle="xs" mt="5px" textAlign="center">
                59 Likes
              </Text>
            </Flex>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              _hover={{ cursor: "pointer", opacity: "0.7" }}
              transition="opacity 0.2s ease-in-out"
            >
              <FaRegComment size="1.5rem" />
              <Text textStyle="xs" mt="5px" textAlign="center">
                {
              data?.comments ? data?.comments?.length :" "
              }
              {" "}comments
              </Text>
            </Flex>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              _hover={{ cursor: "pointer", opacity: "0.7" }}
              transition="opacity 0.2s ease-in-out"
            >
              <FaShare size="1.5rem" color="grey" />
              <Text textStyle="xs" mt="5px" textAlign="center">
                16 shares
              </Text>
            </Flex>
          </Grid>
        </Card.Footer>
      </Card.Root>

      {isDialogOpen && (
        <FullPostCard
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          postData={data}
        />
      )}
    </>
  );
};

export default Homecard;
