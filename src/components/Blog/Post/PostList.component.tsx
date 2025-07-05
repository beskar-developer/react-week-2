import type { OnActionClick, Post } from "@/types/Blog";

import { itemAnimationConfig } from "@shared-vendor/constants";

import { PostCard } from "@/components/Blog";

interface Props {
  items: Post[];
  onActionClick: OnActionClick;
}

const PostList = ({ items, onActionClick }: Props) => {
  return (
    <NotFoundContainer itemCount={items.length} message="پستی یافت نشد">
      <motion.ul className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
        {items.map((post) => (
          <motion.li key={post.id} {...itemAnimationConfig}>
            <PostCard {...post} onActionClick={onActionClick} />
          </motion.li>
        ))}
      </motion.ul>
    </NotFoundContainer>
  );
};

export default PostList;
