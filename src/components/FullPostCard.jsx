import { Grid, Box, Text } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
import { useEffect, useState } from "react";

const FullPostCard = ({ isOpen, onClose, postData }) => {
  const [allComments, setAllComments] = useState([]);

  // Update comments when postData changes
  useEffect(() => {
    setAllComments(postData?.comments || []);
  }, [postData]);

  return (
    <DialogRoot open={isOpen} onOpenChange={onClose} size="xl">
      <DialogContent
        mx="1rem"
        // borderWidth="1px" borderColor="pink.400"
      >
        <DialogBody pt="4">
          <DialogTitle mb="4">Posted By : User Name</DialogTitle>
          {/* <DialogDescription mb="4">
            This is a dialog with some content and a video.
          </DialogDescription> */}
          {/* <AspectRatio ratio={4 / 3} rounded="lg" overflow="hidden">
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/QhBnZ6NPOY0"
              allowFullScreen
            />
          </AspectRatio> */}
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)", // Single column for small screens (mobile)
              md: "repeat(2, 1fr)", // Two columns for small screens
            }}
            gap="6"
            divideX={{ base: "0", md: "1px" }}
            divideY={{ base: "1px", md: "0" }}
            divideColor="pink.400"
          >
            <Box
              h="70vh"
              overflowY="auto"
              p="4"
              textStyle="md"
              sx={{
                "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Webkit browsers
                "-ms-overflow-style": "none", // Hide scrollbar for IE and Edge
                "scrollbar-width": "none", // Hide scrollbar for Firefox
              }}
            >
              <Text mb="1rem" fontWeight="bold" textStyle="lg">
                {postData?.title}
              </Text>
              <Text>{postData?.postText}</Text>
            </Box>
            <Box>
              <Box
                h={{ base: "30vh", md: "60vh" }}
                overflowY="scroll"
                scrollbar="hidden"
                ps="4"
                position="relative"
              >
                {allComments.length > 0 ? (
                  allComments.map((comment, i) => (
                    <Comments key={i} commentData={comment} />
                  ))
                ) : (
                  <Text textAlign="center" mt="5rem">No comments yet</Text>
                )}
              </Box>
              <Box p="4">
                <Box
                  borderTopWidth="1px"
                  borderTopColor="pink.400"
                  pt="10px"
                  mt="10px"
                >
                  <CommentInput
                    postId={postData?.id}
                    setAllComments={setAllComments}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default FullPostCard;
