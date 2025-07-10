import useRoot from "./UseRoot.hook";

import { PostActionBar, PostList, PostModalList } from "@/components/Blog";

const Root = () => {
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
  } = useRoot();

  return (
    <div className="px-6 py-8">
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
    </div>
  );
};

export default Root;
