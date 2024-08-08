import { CarItemProps } from "./CartItem.types";
import { useCart } from "@/hooks/use-cart";
import { formatPENPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { ProductImageMiniature } from "@/components/shared/Product-Image-Miniature";
import { ProductFeatures } from "@/components/shared/Product-Features";

export function CartItem(props: CarItemProps) {
  const { product } = props;
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b">
      <ProductImageMiniature
        slug={product.attributes.slug}
        url={product.attributes.images.data[0].attributes.url}
      />
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">
            {product.attributes.productName}
          </h2>
          <p className="font-semibold">
            {formatPENPrice(product.attributes.price)}
          </p>
          <ProductFeatures motivo={product.attributes.motivo} />
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition"
            )}
          >
            <X size={20} onClick={() => removeItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
}
