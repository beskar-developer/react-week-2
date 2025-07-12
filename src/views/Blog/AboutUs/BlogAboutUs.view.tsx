import { AboutUsActionBar, AboutUsContent } from "@/components/Blog";

const BlogAboutUs = () => {
  return (
    <div className="pb-16 sm:pb-24">
      <Card className="size-full">
        <AboutUsContent />
      </Card>

      <AboutUsActionBar />
    </div>
  );
};

export default BlogAboutUs;
