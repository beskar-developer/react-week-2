import type { Product } from "@/types/Product";

import { itemAnimationConfig } from "@shared-vendor/constants";

import { ProductCard } from "@/components/Product";

interface Props {
  items: Product[];
}

const List = ({ items }: Props) => {
  return (
    <AnimatePresence>
      {!items.length ? (
        <NotFound message="محصولی یافت نشد" {...itemAnimationConfig} />
      ) : (
        <motion.ul className="grid size-full gap-6 overflow-x-hidden overflow-y-auto p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((product) => (
            <motion.li key={product.id} {...itemAnimationConfig}>
              <ProductCard {...product} />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default List;
