import { db } from "@/config/firebase-config";
import { Input, Button, Flex } from "@chakra-ui/react";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { useState } from "react";

const CommentInput = ({ type, postId,setAllComments  }) => {
  const [inpText, setInpText] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!inpText.trim()) return; // Prevent empty comments

    try {
      const postDocRef = doc(db, "userPost", postId);
      const postDoc = await getDoc(postDocRef);

      if (postDoc.exists()) {
        const newComment = {
          text: inpText,
          createdAt: new Date().toISOString(),
        };

        await updateDoc(postDocRef, {
          comments: arrayUnion(newComment),
        });

        // **Update local state to show new comment immediately**
        setAllComments((prevComments) => [...prevComments, newComment]);
      } else {
        console.error("Post not found!");
      }

      setInpText(""); // Clear input after posting
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Flex>
        <Input
          placeholder={type === "search" ? "Search users" : "Add a comment"}
          value={inpText}
          onChange={(e) => setInpText(e.target.value)}
        />
        <Button type="submit" variant="solid">
          {type === "search" ? "Search" : "Post"}
        </Button>
      </Flex>
    </form>
  );
};

export default CommentInput;
