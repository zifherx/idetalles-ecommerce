/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetCategories } from "@/api/getProducts";
import { iResponse } from "@/types/response";
import { iCategory } from "@/types/typeProducts";
import Link from "next/link";

export function ChooseCategory() {
  const { loading, result }: iResponse = useGetCategories();

  //   console.log(result);
  return (
    <div className="max-w-7xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 PB-4 text-3xl sm:pb-8">
        Elige tu categoría favorita
      </h3>
      <div className="grid gap-8 sm:grid-cols-5">
        {!loading &&
          result !== undefined &&
          result.map(({ id, attributes }: iCategory) => (
            <Link
              key={id}
              href={`/category/${attributes.slug}`}
              className="relative max-w-xs mx-auto p-3 overflow-hidden bg-no-repeat bg-cover rounded-lg bg-slate-100"
            >
              <img
                src={`${attributes.mainImage.data.attributes.url}`}
                alt={attributes.categoryName}
                className="max-w-[180px] transition duration-300 ease-in-out rounded-lg hover:scale-110 hover:drop-shadow-lg"
              />
              <p className="absolute w-full py-2 text-lg font-bold text-center degradedBlue bg-black bottom-5 backdrop-blur-lg">
                {attributes.categoryName}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
}
