import type { Post } from "@/types/Blog";

import { itemAnimationConfig } from "@shared-vendor/constants";

import { PostCard } from "@/components/Blog";

interface Props {
  items: Post[];
}

const PostList = ({ items }: Props) => {
  return (
    <NotFoundContainer itemCount={items.length} message="پستی یافت نشد">
      <motion.ul className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
        {items.map((post) => (
          <motion.li key={post.id} {...itemAnimationConfig}>
            <PostCard {...post} />
          </motion.li>
        ))}
      </motion.ul>
    </NotFoundContainer>
  );
};

export default PostList;
