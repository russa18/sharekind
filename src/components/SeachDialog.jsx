import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CommentInput from "./CommentInput";

const SeachDialog = () => {
  return (
    <DialogContent mx="1rem" borderWidth="1px" borderColor="pink.400">
      <DialogHeader>
        <DialogTitle>Search </DialogTitle>
      </DialogHeader>
      <DialogBody>
        <CommentInput type="search" />
      </DialogBody>

      <DialogCloseTrigger />
    </DialogContent>
  );
};

export default SeachDialog;
