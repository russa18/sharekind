import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button, Input } from "@chakra-ui/react";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { HiUpload } from "react-icons/hi";
import { Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import usePostStore from "@/Store/PostStore";

const CreatePostDialog = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newPostText, setNewPostText] = useState("");

  const { allPost, setAllPost } = usePostStore(); // Access Zustand store

  const postsCollectionRef = collection(db, "userPost");

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const docRef = await addDoc(postsCollectionRef, {
        title: newTitle,
        postText: newPostText,
      });

      // Update Zustand store immediately
      setAllPost([
        { id: docRef.id, title: newTitle, postText: newPostText },
        ...allPost, // Keep existing posts
      ]);
      alert("Posted successfully");
    } catch (error) {
      console.error("Error posting Story:", error);
    }
  };

  return (
    <DialogContent
      minH="300px"
      mx="1rem"
      borderWidth="1px"
      borderColor="pink.400"
    >
      <DialogHeader>
        <DialogTitle>Create new post </DialogTitle>
      </DialogHeader>
      <DialogBody>
        <form onSubmit={handlePostSubmit}>
          <Input
            placeholder="Title"
            variant="outline"
            my="1rem"
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <Textarea
            placeholder="Write your kindness story..."
            size="xl"
            minH="200px"
            onChange={(e) => setNewPostText(e.target.value)}
            required
          />

          {/* <FileUploadRoot maxFiles={5} my="1rem">
            <FileUploadTrigger asChild>
              <Button variant="solid" size="sm">
                <HiUpload /> Upload file
              </Button>
            </FileUploadTrigger>

            <FileUploadList showSize clearable />
          </FileUploadRoot> */}

          <Button
            variant="solid"
            size="lg"
            my="1rem"
            ms="auto"
            display="block"
            bgColor="blue.500"
            color="white"
            type="submit"
          >
            Share
          </Button>
        </form>
      </DialogBody>

      <DialogCloseTrigger />
    </DialogContent>
  );
};

export default CreatePostDialog;
