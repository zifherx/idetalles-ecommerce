/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { iCarouselProductProps } from "./CarouselProduct.type";

export function CarouselProduct(props: iCarouselProductProps) {
  const { images } = props;

  return (
    <div className="sm:px-16">
      <Carousel>
        <CarouselContent>
          {images.data.map((image) => (
            <CarouselItem key={image.id}>
              <img
                src={`${image.attributes.url}`}
                alt="Image product"
                className="rounded-lg hover:drop-shadow-xl hover:shadow-x"
              />
              {/* <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                alt="Image product"
                className="rounded-lg"
                width={500}
                height={500}
              /> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
