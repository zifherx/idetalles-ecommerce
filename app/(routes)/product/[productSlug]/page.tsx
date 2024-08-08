"use client";

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { iResponse } from "@/types/response";
import { useParams } from "next/navigation";
import { SkeletonProduct } from "./components/Sleleton-Product";
import { CarouselProduct } from "./components/Carousel-Product";
import { InfoProduct } from "./components/Info-Product";
import { BreadcrumbProduct } from "@/components/shared/Breadcrumb-Product";

export default function PageProduct() {
  const params = useParams();
  const { productSlug } = params;

  const { loading, result }: iResponse = useGetProductBySlug(productSlug);

  if (result === null) {
    return <SkeletonProduct />;
  }

  return (
    <div className="max-w-6xl py-4 px-2 mx-auto sm:py-14 sm:px-24">
      <div className="py-4 sm:py-8 md:-mt-10 md:mb-20">
        <BreadcrumbProduct
          categoryUrl={result[0].attributes.category.data.attributes.slug}
          categoryName={
            result[0].attributes.category.data.attributes.categoryName
          }
          actualProduct={result[0].attributes.productName}
        />
      </div>
      <div className="grid sm:grid-cols-2">
        <div className="p-2">
          <CarouselProduct images={result[0].attributes.images} />
        </div>
        <div className="sm:px-12">
          <InfoProduct product={result[0]} />
        </div>
      </div>
    </div>
  );
}
