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

const CreatePostDialog = () => {
  return (
    <DialogContent minH="300px" mx="1rem" borderWidth="1px" borderColor="pink.400">
      <DialogHeader>
        <DialogTitle>Create new post </DialogTitle>
      </DialogHeader>
      <DialogBody>
        <form>
        <Input placeholder="Title" variant="outline" my="1rem" />
          <Textarea
            placeholder="Write your kindness story..."
            size="xl"
            minH="200px"
          />

          {/* <FileUploadRoot maxFiles={5} my="1rem">
            <FileUploadTrigger asChild>
              <Button variant="solid" size="sm">
                <HiUpload /> Upload file
              </Button>
            </FileUploadTrigger>

            <FileUploadList showSize clearable />
          </FileUploadRoot> */}

          <Button  variant="solid" size="lg" my="1rem" ms="auto" display="block" bgColor="blue.500" color="white" type="submit">
            Share
          </Button>
        </form>
      </DialogBody>

      <DialogCloseTrigger />
    </DialogContent>
  );
};

export default CreatePostDialog;
