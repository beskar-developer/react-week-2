import type { IPostCard } from "./PostCard.type";

const PostCardContent = ({ content, detailed }: Pick<IPostCard, "content" | "detailed">) => {
  return (
    <p
      className={twMerge(
        "w-full text-gray-500 dark:text-gray-400",
        !detailed && "overflow-hidden overflow-ellipsis whitespace-nowrap",
      )}
    >
      {content}
    </p>
  );
};

export default PostCardContent;
