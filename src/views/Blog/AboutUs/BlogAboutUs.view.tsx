import { AboutUsActionBar, AboutUsContent } from "@/components/Blog";

const BlogAboutUs = () => {
  return (
    <div className="pb-16 sm:pb-24">
      <Card className="flex size-full flex-col gap-6 px-4 py-6">
        <AboutUsContent />
      </Card>

      <AboutUsActionBar />
    </div>
  );
};

export default BlogAboutUs;
