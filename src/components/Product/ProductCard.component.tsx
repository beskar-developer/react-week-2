import type { Product } from "@/types/Product";

const ProductCard = ({ name, price, image }: Product) => {
  return (
    <Card className="grid h-46 grid-cols-2 items-center gap-4 p-8">
      <ImageLoader src={image} alt={name} className="size-24 rounded-full" />

      <div className="flex flex-col gap-4">
        <span className="text-lg font-semibold">{name}</span>

        <p className="font-medium text-gray-500 dark:text-gray-400">
          {convertNumberToLocaleString(price)} <strong>تومان</strong>
        </p>

        <BaseButton variant="outlined">خرید</BaseButton>
      </div>
    </Card>
  );
};

export default ProductCard;
