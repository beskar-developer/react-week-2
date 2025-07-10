import type { Post } from "@/types/Blog";

import service from "@/services/Blog";

const useRoot = () => {
  const {
    data: posts,
    setData: setPosts,
    loading,
    reExecute,
  } = usePromise(service.getAll, {
    defaultData: [],
    immediate: true,
    key: "POSTS",
  });
  const { items: searchedPosts, searchedValue, setSearchedValue } = useSearch(posts, ["title", "content"]);

  const [selectedPostId, setSelectedPostId] = useState<Post["id"]>(0);
  const selectedPost = findByKey(posts, selectedPostId);

  const postCount = posts.length;

  const deletePost = () => setPosts((posts) => posts.filter(({ id }) => id !== selectedPostId));
  const addPost = (post: Post) => setPosts((posts) => [...posts, post]);
  const editPost = (post: Post) =>
    setPosts((posts) => {
      const postIndex = findByKey(posts, post.id, { index: true });

      const updatedPosts = deepClone(posts);
      updatedPosts[postIndex] = post;

      return updatedPosts;
    });

  return {
    searchedPosts,
    postCount,
    searchedValue,
    selectedPost,
    loading,
    setSearchedValue,
    setSelectedPostId,
    selectedPostId,
    addPost,
    editPost,
    deletePost,
    reExecute,
  };
};

export default useRoot;
