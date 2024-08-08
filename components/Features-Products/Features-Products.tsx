/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { iResponse } from "@/types/response";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { SkeletonSchema } from "../SkeletonSchema";
import { iProduct } from "@/types/typeProducts";
import { Card, CardContent } from "../ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import { IconButton } from "../Icon-Button";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

export function FeaturesProducts() {
  const router = useRouter();
  const { result, loading }: iResponse = useGetFeaturedProducts();
  const { addItem } = useCart();

  return (
    <div className="max-w-7xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((product: iProduct) => {
              const { id, attributes } = product;
              const { slug, images, productName, motivo } = attributes;

              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-6 py-2">
                        <img
                          src={`${
                            images.data === null
                              ? ""
                              : images.data[0].attributes.url
                          } `}
                          alt="Image featured"
                          className="hover:drop-shadow-2xl"
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600"
                            />
                            <IconButton
                              onClick={() => addItem(product)}
                              icon={<ShoppingCart size={20} />}
                              className="text-gray-600"
                            />
                          </div>
                        </div>
                      </CardContent>

                      <div className="flex justify-between gap-4 px-8">
                        <h3 className="text-lg font-bold">{productName}</h3>
                        <div className="flex items-end">
                          <p className="px-2 py-1 text-white text-xs bg-black rounded-full dark:bg-white dark:text-black w-fit">
                            {motivo}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
