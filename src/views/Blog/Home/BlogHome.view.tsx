import useBlog from "./UseBlog.hook";

import { PostActionBar, PostList, PostModalList } from "@/components/Blog";

const BlogHome = () => {
  const {
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
  } = useBlog();

  return (
    <Modal>
      <PostActionBar
        searchedValue={searchedValue}
        itemCount={postCount}
        onSearchedValueChange={setSearchedValue}
        onRefresh={reExecute}
      />

      <PostList items={searchedPosts} loading={loading} onActionClick={(id) => setSelectedPostId(id)} />

      <PostModalList
        selectedPost={selectedPost}
        selectedPostId={selectedPostId}
        onAdd={addPost}
        onDelete={deletePost}
        onEdit={editPost}
      />
    </Modal>
  );
};

export default BlogHome;
