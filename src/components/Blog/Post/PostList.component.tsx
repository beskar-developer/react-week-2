import type { OnActionClick, Post } from "@/types/Blog";

import { itemAnimationConfig } from "@shared-vendor/constants";

import { PostCard } from "@/components/Blog";

interface IPostList {
  items: Post[];
  onActionClick: OnActionClick;
  loading?: boolean;
}

const PostList = ({ items, loading, onActionClick }: IPostList) => {
  return (
    <div className="size-full pb-32 sm:pb-36">
      <LoadingContainer
        loading={loading}
        message="در حال بارگیری پست ها..."
        className="fixed top-0 left-0 h-screen w-screen"
      >
        <NotFoundContainer itemCount={items.length} message="پستی یافت نشد">
          <motion.ul className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
            {items.map((post) => (
              <motion.li key={post.id} {...itemAnimationConfig}>
                <PostCard {...post} onActionClick={onActionClick} />
              </motion.li>
            ))}
          </motion.ul>
        </NotFoundContainer>
      </LoadingContainer>
    </div>
  );
};

export default PostList;
