import type { IPostCard } from "./PostCard.type";

import PostCardButtonList from "./PostCardButtonList.component";
import PostCardContent from "./PostCardContent.component";
import PostCardHeader from "./PostCardHeader.component";
import PostCardIllustration from "./PostCardIllustration.component";

const PostCard = ({ id, title, content, onActionClick, detailed }: IPostCard) => {
  return (
    <Card className={twMerge("p-5", detailed && "flex flex-col items-center md:flex-row")}>
      <PostCardIllustration detailed={detailed} />

      <div className="flex flex-col gap-6">
        <PostCardHeader title={title} />

        <PostCardContent content={content} detailed={detailed} />

        <PostCardButtonList id={id} onActionClick={onActionClick} detailed={detailed} />
      </div>
    </Card>
  );
};

export default PostCard;
