import { Grid, Box } from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";
import CommentInput from "./CommentInput";
import Comments from "./Comments";

const FullPostCard = ({ isOpen, onClose }) => {
  return (
    <DialogRoot open={isOpen} onOpenChange={onClose} size="xl" >
      <DialogContent mx="1rem" borderWidth="1px" borderColor="pink.400" >
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
              overflowY="scroll"
              scrollbar="hidden"
              p="4"
              textStyle="md"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              tempore non vero illo molestiae dolores? Quis earum iusto dolor
              aut exercitationem commodi quae voluptatem beatae saepe, aliquam
              iure. Pariatur, nam. Dolor iure pariatur eius explicabo adipisci
              minima, qui optio aut, et laborum molestias aliquam, perspiciatis
              assumenda? Minima doloremque rerum repellat quos soluta ducimus
              rem possimus. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Excepturi error rerum nisi delectus accusamus quaerat,
              similique iusto maiores, itaque vitae dolorem earum eaque vel
              corrupti aliquid magni voluptatem laborum mollitia esse, saepe
              ipsam aut sit? Suscipit aliquid nihil fugiat nesciunt ullam
              eligendi. Impedit quae iusto exercitationem. Dolore impedit, nobis
              nesciunt quia tempora velit sed voluptates maiores officiis,
              aliquid quos mollitia harum quae! Hic deserunt doloribus numquam,
              nostrum cum earum! Labore exercitationem sequi ipsam non
              voluptatibus ex sunt in! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam tempore non vero illo molestiae dolores?
              Quis earum iusto dolor aut exercitationem commodi quae voluptatem
              beatae saepe, aliquam iure. Pariatur, nam. Dolor iure pariatur
              eius explicabo adipisci minima, qui optio aut, et laborum
              molestias aliquam, perspiciatis assumenda? Minima doloremque rerum
              repellat quos soluta ducimus rem possimus. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Excepturi error rerum nisi
              delectus accusamus quaerat, similique iusto maiores, itaque vitae
              dolorem earum eaque vel corrupti aliquid magni voluptatem laborum
              mollitia esse, saepe ipsam aut sit? Suscipit aliquid nihil fugiat
              nesciunt ullam eligendi. Impedit quae iusto exercitationem. Dolore
              impedit, nobis nesciunt quia tempora velit sed voluptates maiores
              officiis, aliquid quos mollitia harum quae! Hic deserunt doloribus
              numquam, nostrum cum earum! Labore exercitationem sequi ipsam non
              voluptatibus ex sunt in!
            </Box>
            <Box>
              <Box
                h={{ base: "30vh", md: "60vh" }}
                overflowY="scroll"
                scrollbar="hidden"
                ps="4"
                position="relative"
              >
                <Comments />
                <Comments />
                <Comments />
                <Comments /> <Comments /> <Comments /> <Comments /> <Comments />{" "}
                <Comments /> <Comments /> <Comments /> <Comments /> <Comments />{" "}
                <Comments />
              </Box>
              <Box p="4">
                <Box
                  borderTopWidth="1px"
                  borderTopColor="pink.400"
                  pt="10px"
                  mt="10px"
                >
                  <CommentInput />
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
