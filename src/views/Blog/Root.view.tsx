import service from "@/service/Blog";

import { ActionBar, PostList } from "@/components/Blog";

const Root = () => {
  const { data: posts, loading } = usePromise(service.getAll, {
    defaultData: [],
    immediate: true,
    ttl: 3600 * 1000,
    key: "posts",
  });
  const { items: searchedPosts, searchedValue, setSearchedValue } = useSearch(posts, ["title", "content"]);

  return (
    <div className="px-6 py-8">
      <Modal>
        <ActionBar searchedValue={searchedValue} onSearchedValueChange={setSearchedValue} />

        <div className="size-full pb-32">{loading ? <Loading /> : <PostList items={searchedPosts} />}</div>

        <Modal.Window title="افزودن" render={() => <div>modal</div>} />
      </Modal>
    </div>
  );
};

export default Root;
