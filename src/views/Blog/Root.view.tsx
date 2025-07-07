import type { Post } from "@/types/Blog";

import service from "@/services/Blog";

import { ActionBar, ActionModal, DeleteModal, PostList } from "@/components/Blog";

const Root = () => {
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

  const deletePost = () => setPosts((posts) => posts.filter(({ id }) => id !== selectedPostId));
  const addPost = (post: Post) => setPosts((posts) => [...posts, post]);
  const editPost = (post: Post) =>
    setPosts((posts) => {
      const postIndex = findByKey(posts, post.id, { index: true });

      const updatedPosts = deepClone(posts);
      updatedPosts[postIndex] = post;

      return updatedPosts;
    });

  return (
    <div className="px-6 py-8">
      <Modal>
        <ActionBar
          searchedValue={searchedValue}
          itemCount={posts.length}
          onSearchedValueChange={setSearchedValue}
          onRefresh={reExecute}
        />

        <div className="size-full pb-32 sm:pb-36">
          {loading ? (
            <LoadingMessage
              className="fixed top-0 left-0 h-screen w-screen"
              message="در حال بارگیری پست ها..."
            />
          ) : (
            <PostList items={searchedPosts} onActionClick={(id) => setSelectedPostId(id)} />
          )}
        </div>

        <Modal.Window
          name="ADD"
          title="افزودن"
          render={({ close }) => <ActionModal onClose={close} onAdd={addPost} />}
        />
        <Modal.Window
          name="DELETE"
          title="حذف"
          render={({ close }) => <DeleteModal id={selectedPostId} onClose={close} onDelete={deletePost} />}
        />
        <Modal.Window
          name="EDIT"
          title="ویرایش"
          render={({ close }) => <ActionModal onClose={close} onEdit={editPost} {...selectedPost} />}
        />
      </Modal>
    </div>
  );
};

export default Root;
