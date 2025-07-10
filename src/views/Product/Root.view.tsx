import useRoot from "./UseRoot.hook";

import { ProductActionBar, ProductList } from "@/components/Product";

const Root = () => {
  const { searchedProducts, productCount, searchedValue, setSearchedValue } = useRoot();

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <ProductActionBar
        itemCount={productCount}
        searchedValue={searchedValue}
        onSearchedValueChange={setSearchedValue}
      />

      <ProductList items={searchedProducts} />
    </div>
  );
};

export default Root;
