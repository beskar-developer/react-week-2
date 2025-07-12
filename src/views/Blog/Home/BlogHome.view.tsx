import useBlog from "./UseBlog.hook";

import { HomeActionBar, PostList, PostModalList } from "@/components/Blog";

const BlogHome = () => {
  const {
    searchedPosts,
    postCount,
    searchedValue,
    selectedPost,
    loading,
    setSearchedValue,
    selectedPostId,
    addPost,
    editPost,
    deletePost,
    reExecute,
    onActionClick,
  } = useBlog();

  return (
    <Modal>
      <HomeActionBar
        searchedValue={searchedValue}
        itemCount={postCount}
        onSearchedValueChange={setSearchedValue}
        onRefresh={reExecute}
      />

      <PostList items={searchedPosts} loading={loading} onActionClick={onActionClick} />

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
