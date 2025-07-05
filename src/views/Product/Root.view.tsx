import { fakerFA as faker } from "@faker-js/faker";

import { ActionBar, ProductList } from "@/components/Product";

const IMAGE_SIZE = 300;
const PRODUCTS = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  name: faker.word.noun(),
  price: faker.number.int(100_000),
  image: faker.image.urlPicsumPhotos({ width: IMAGE_SIZE, height: IMAGE_SIZE }),
}));

const List = () => {
  const [products] = useState(PRODUCTS);
  const { items: searchedProducts, searchedValue, setSearchedValue } = useSearch(products, ["name", "price"]);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <ActionBar
        itemCount={products.length}
        searchedValue={searchedValue}
        setSearchedValue={setSearchedValue}
      />

      <ProductList items={searchedProducts} />
    </div>
  );
};

export default List;
