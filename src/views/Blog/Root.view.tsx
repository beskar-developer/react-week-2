import service from "@/service/Blog";

import { ActionBar, DeleteModal, PostList } from "@/components/Blog";
import type { Post } from "@/types/Blog";

const Root = () => {
  const {
    data: posts,
    setData: setPosts,
    loading,
    reExecute,
  } = usePromise(service.getAll, {
    defaultData: [],
    immediate: true,
    ttl: 3600 * 1000,
    key: "POSTS",
  });
  const { items: searchedPosts, searchedValue, setSearchedValue } = useSearch(posts, ["title", "content"]);

  const [selectedPostId, setSelectedPostId] = useState<Post["id"]>(0);

  const deletePost = () => setPosts((posts) => posts.filter(({ id }) => id !== selectedPostId));

  return (
    <div className="px-6 py-8">
      <Modal>
        <ActionBar
          searchedValue={searchedValue}
          itemCount={posts.length}
          onSearchedValueChange={setSearchedValue}
          onRefresh={reExecute}
        />

        <div className="size-full pb-32">
          {loading ? (
            <FullPageLoading message="در حال بارگیری پست ها..." />
          ) : (
            <PostList items={searchedPosts} onActionClick={(id) => setSelectedPostId(id)} />
          )}
        </div>

        <Modal.Window name="ADD" title="افزودن" render={() => <div>Add</div>} />
        <Modal.Window
          name="DELETE"
          title="حذف"
          render={({ close }) => <DeleteModal id={selectedPostId} onClose={close} onDelete={deletePost} />}
        />
        <Modal.Window name="EDIT" title="ویرایش" render={() => <div>Edit</div>} />
      </Modal>
    </div>
  );
};

export default Root;
