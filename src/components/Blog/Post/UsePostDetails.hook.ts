import service from "@/services/Blog";

const usePostDetails = () => {
  const params = useParams();

  const { data: post, loading } = usePromise(
    async () => {
      const post = await service.getById(+params.id!);

      return post;
    },
    {
      key: "POSTS_DETAILS",
      ttl: 0,
      immediate: true,
    },
  );

  return {
    post,
    loading,
  };
};

export default usePostDetails;
