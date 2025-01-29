import Homecard from "@/components/Homecard";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import usePostStore from "@/Store/PostStore";

const Home = () => {
  const { allPost, getPost } = usePostStore();

  useEffect(() => {
    getPost(); // Fetch posts when component mounts
  }, [getPost]);
  // console.log(allPost);

  // const [allPosts, setAllPosts] = useState([]);

  // const postsCollectionRef = collection(db, "userPost");

  // const getAllPosts = async () => {
  //   try {
  //     const d = await getDocs(postsCollectionRef);
  //     const data = d.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));

  //     setAllPosts(data);
  //     // console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getAllPosts();
  // }, []);

  return (
    <Flex
      direction="column"
      // alignItems="center"
      overflowX="hidden"
      pl={{ base: "0", md: "2rem" }}
      w={{
        base: "full", // Single column for small screens (mobile)
        md: "full", // Two columns for small screens
        lg: "1/2",
      }}
    >
      {allPost.map((posts, i) => (
        <Homecard isHome="true" key={i} data={posts} />
      ))}
    </Flex>
  );
};

export default Home;
