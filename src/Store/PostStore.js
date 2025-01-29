import { db } from "@/config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { create } from "zustand";

const usePostStore = create((set, get) => ({
  allPost: [],
  loading: false,
  error: null,

  getPost: async () => {
    if (get().allPost.length > 0) return; // Avoid redundant fetches

    set({ loading: true, error: null });
    try {
      const snapshot = await getDocs(collection(db, "userPost"));
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      set({ allPost: posts, loading: false });
    } catch (error) {
      console.error("Error fetching posts:", error);
      set({ error: error.message, loading: false });
    }
  },
   // ✅ Function to update posts immediately
   setAllPost: (newPosts) => set({ allPost: newPosts }),
}));

export default usePostStore;
