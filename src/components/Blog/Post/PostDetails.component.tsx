import usePostDetails from "./UsePostDetails.hook";

import PostCard from "./PostCard.component";

const PostDetails = () => {
  const { post, loading } = usePostDetails();

  return (
    <LoadingContainer
      className="fixed h-screen w-screen"
      message="در حال گرفتن اطلاعات پست..."
      loading={loading}
    >
      <PostCard {...post} detailed />
    </LoadingContainer>
  );
};

export default PostDetails;
