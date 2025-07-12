import type { IPostCard } from "./PostCard.type";

import { AiFillFileText } from "react-icons/ai";

const PostCardHeader = ({ title }: Pick<IPostCard, "title">) => {
  return (
    <div className="font-xl flex items-center gap-4 font-extrabold">
      <AiFillFileText className="size-8 fill-indigo-500" />

      <span>{title}</span>
    </div>
  );
};

export default PostCardHeader;
