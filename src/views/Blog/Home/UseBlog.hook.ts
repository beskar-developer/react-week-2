import type { OnActionClick, Post, PostAction } from "@/types/Blog";

import service from "@/services/Blog";

import { ROUTES } from "@/constants/Blog";

type ActionMap = Partial<Record<PostAction, (id: Parameters<OnActionClick>[0]) => void>>;

const useBlog = () => {
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

  const navigate = useNavigate();

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

  const redirectToDetails = (id: Post["id"]) =>
    navigate(
      generatePath(ROUTES.POST_PATH, {
        id: String(id),
      }),
    );

  const ACTION_MAP: ActionMap = {
    DETAILS: redirectToDetails,
  };

  const onActionClick: OnActionClick = (id, action) => {
    setSelectedPostId(id);

    ACTION_MAP[action]?.(id);
  };

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
    onActionClick,
  };
};

export default useBlog;
