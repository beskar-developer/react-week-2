import ProductRoot from "@/views/Product/Root.view";

const App = () => {
  return (
    <div className={twMerge("app-container dark:text-white", "p-0")}>
      <ProductRoot />
    </div>
  );
};

export default App;
