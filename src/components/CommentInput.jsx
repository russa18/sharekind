import { Input, Button, Flex } from "@chakra-ui/react";
 
const CommentInput = ({type}) => {
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={onSubmit}>
      <Flex>
        {/* <Input placeholder="Add a comment" /> */}
        <Input placeholder={`${type==="search"?"Search users":"Add a comment"}`} />

        <Button type="submit" variant="solid">
         {type ==="search"? "Search":"Post"}
        </Button>
      </Flex>
    </form>
  );
};

export default CommentInput;
