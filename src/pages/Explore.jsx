import Homecard from "@/components/Homecard";
import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import usePostStore from "@/Store/PostStore";
const Explore = () => {
  // const [allPosts, setAllPosts] = useState([]);
  // const postsCollectionRef = collection(db, "userPost");

  const { allPost, getPost } = usePostStore();

  useEffect(() => {
    getPost(); // Fetch posts when component mounts
  }, [getPost]);
  // console.log(allPost);

  // useEffect(() => {
  //   const getAllPosts = async () => {
  //     try {
  //       const d = await getDocs(postsCollectionRef);
  //       const data = d.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));

  //       setAllPosts(data);
  //       // console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAllPosts();
  // }, []);
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)", // Single column for small screens (mobile)
        md: "repeat(2, 1fr)", // Two columns for small screens
        lg: "repeat(3, 1fr)", // Three columns for medium screens (tablet)
      }}
      gap="6"
      overflowX="hidden"
      w="full"
    >
      {allPost.map((posts, i) => (
        <Homecard isHome="true" key={i} data={posts} />
      ))}
    </Grid>
  );
};

export default Explore;
