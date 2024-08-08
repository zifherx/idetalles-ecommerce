/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { iProductCard } from "./Product.interface";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IconButton } from "@/components/Icon-Button";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { formatPENPrice } from "@/lib/formatPrice";
import { useCart } from "@/hooks/use-cart";

export function ProductCard(props: iProductCard) {
  const { product } = props;
  const router = useRouter();
  const { addItem } = useCart();

  return (
    <div className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
          {product.attributes.motivo}
        </p>
      </div>
      <Carousel opts={{ align: "start" }} className="w-full max-w-md">
        <CarouselContent>
          {product.attributes.images.data.map((image) => (
            <CarouselItem key={image.id} className="group">
              <img
                src={`${image.attributes.url}`}
                alt="Image"
                className="rounded-xl"
              />
              <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-6">
                  <IconButton
                    onClick={() =>
                      router.push(`/product/${product.attributes.slug}`)
                    }
                    icon={<Expand size={20} className="text-gray-600" />}
                  />
                  <IconButton
                    onClick={() => addItem(product)}
                    icon={<ShoppingCart size={20} className="text-gray-600" />}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <p className="text-xl text-center">{product.attributes.productName}</p>
      <p className="font-bold text-center">
        {formatPENPrice(product.attributes.price)}
      </p>
    </div>
  );
}
