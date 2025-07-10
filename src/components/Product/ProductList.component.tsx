import type { IProduct } from "@/types/Product";

import { itemAnimationConfig } from "@shared-vendor/constants";

import { ProductCard } from "@/components/Product";

interface IProductList {
  items: IProduct[];
}

const ProductList = ({ items }: IProductList) => {
  return (
    <NotFoundContainer itemCount={items.length} message="محصولی یافت نشد">
      <motion.ul className="grid size-full gap-6 overflow-x-hidden overflow-y-auto p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((product) => (
          <motion.li key={product.id} {...itemAnimationConfig}>
            <ProductCard {...product} />
          </motion.li>
        ))}
      </motion.ul>
    </NotFoundContainer>
  );
};

export default ProductList;
