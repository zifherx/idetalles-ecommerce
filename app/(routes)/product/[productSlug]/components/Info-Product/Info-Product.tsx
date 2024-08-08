import { Separator } from "@/components/ui/separator";
import { iInfoProductProps } from "./InfoProduct.types";
import { formatPENPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { ProductFeatures } from "@/components/shared/Product-Features";

export function InfoProduct(props: iInfoProductProps) {
  const { product } = props;
  const { addItem } = useCart();
  const { addLovedItem } = useLovedProducts();

  return (
    <div className="px-6 py-5">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl font-bold">{product.attributes.productName}</h1>
        {/* <div className="flex items-center justify-between gap-3">
          <p className="px-2 py-1 text-xs text-white bg-black rounded-full w-fit dark:bg-white dark:text-black">
            {product.attributes.motivo}
          </p>
        </div> */}
        <ProductFeatures motivo={product.attributes.motivo} />
      </div>
      <Separator className="my-4" />
      <p>{product.attributes.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl font-semibold">
        {formatPENPrice(product.attributes.price)}
      </p>
      <div className="flex items-center gap-5">
        <Button className="w-full text-lg" onClick={() => addItem(product)}>
          Comprar
          <ShoppingCart className="ml-2" />
        </Button>
        <Heart
          width={30}
          strokeWidth={2}
          className="transition duration-300 cursor-pointer hover:fill-black"
          onClick={() => addLovedItem(product)}
        />
      </div>
    </div>
  );
}
