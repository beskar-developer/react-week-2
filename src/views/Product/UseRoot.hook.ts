import { fakerFA as faker } from "@faker-js/faker";

const IMAGE_SIZE = 300;
const MIN_PRICE = 100_000;
const MAX_PRICE = 200_000;

const PRODUCTS = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.product(),
  price: +faker.commerce.price({ min: MIN_PRICE, max: MAX_PRICE, dec: 0 }),
  image: faker.image.urlPicsumPhotos({ width: IMAGE_SIZE, height: IMAGE_SIZE }),
}));

const PRODUCT_COUNT = PRODUCTS.length;

const useRoot = () => {
  const { items: searchedProducts, searchedValue, setSearchedValue } = useSearch(PRODUCTS, ["name", "price"]);

  return { searchedProducts, productCount: PRODUCT_COUNT, searchedValue, setSearchedValue };
};

export default useRoot;
