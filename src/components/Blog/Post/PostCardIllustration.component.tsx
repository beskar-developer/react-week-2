import BlogSvg from "@/assets/svg/blog.svg?react";

import type { IPostCard } from "./PostCard.type";

const PostCardIllustration = ({ detailed }: Pick<IPostCard, "detailed">) => {
  if (!detailed) return;

  return <BlogSvg className="size-80 shrink-0 md:size-120" />;
};

export default PostCardIllustration;
