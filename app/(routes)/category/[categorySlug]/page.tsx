"use client";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { iResponse } from "@/types/response";
import { useParams } from "next/navigation";
import { FiltersControlCategory } from "./components/Filter-Control-Category";
import { SkeletonSchema } from "@/components/SkeletonSchema";
import { ProductCard } from "./components/ProductCard";
import { iProduct } from "@/types/typeProducts";
import { useState } from "react";

export default function PageCategory() {
  const params = useParams();
  const { categorySlug } = params;

  const [filterMotivo, setFilterMotivo] = useState("");

  const { result, loading }: iResponse = useGetCategoryProduct(categorySlug);

  const filteredProducts =
    result !== null &&
    !loading &&
    (filterMotivo === ""
      ? result
      : result.filter(
          (product: iProduct) => product.attributes.motivo === filterMotivo
        ));

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium px-5">
          Categoría de{" "}
          {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}

      <Separator className="my-1 md:my-3" />

      <div className="sm:flex sm:justify-between">
        <FiltersControlCategory setFilterMotivo={setFilterMotivo} />
        {filteredProducts !== null &&
          !loading &&
          filteredProducts?.length === 0 && (
            <p className="font-semibold text-lg text-center md:py-16">
              No hay productos con este filtro.
            </p>
          )}
        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts?.map((product: iProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
}
