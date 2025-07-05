import BlogRoot from "@/views/Blog/Root.view";

const App = () => {
  return (
    <div className={twMerge("app-container dark:text-white", "p-0")}>
      <BlogRoot />
    </div>
  );
};

export default App;
