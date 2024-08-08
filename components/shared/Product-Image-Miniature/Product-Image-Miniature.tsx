/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { ProductImageMinuatureProps } from "./ProductImageMiniature.types";

export function ProductImageMiniature(props: ProductImageMinuatureProps) {
  const { slug, url } = props;

  const router = useRouter();
  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/product/${slug}`)}
    >
      <img
        src={`${url}`}
        alt="Image Loved Product"
        className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32 hover:drop-shadow-lg"
      />
    </div>
  );
}
