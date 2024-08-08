"use client";
import Image from "next/image";
import Link from "next/link";

import { Separator } from "../ui/separator";

import { Speech } from "lucide-react";

export function UnderConstruction() {
  const urlWhatsapp =
    "https://l.instagram.com/?u=http%3A%2F%2Fwa.me%2F%2B51980218870&e=AT2obG25lSZh95LGSfyPXgHGNsuuGND-92BDZ18kSKfldYhWKvBRhvNtLzRhNr58SID_EPrBfZ2sLFmueQ2QA7YnzPMMYChJIoMrZqRVkpqMameom_4-ZA";

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:py-14 sm:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-[40%,1fr] py-5 ">
        <div className="my-auto items-center justify-center">
          <h2 className="block max-w-xs uppercase font-bold degradedBlue bg-blueLight text-2xl md:text-4xl text-left">
            En construcción
          </h2>
          <Separator className="h-px md:h-1 rounded-2xl bg-blueLight my-1 mr-10" />
          <h3 className="degradedBlue bg-blueLight text-xl md:text-2xl font-semibold">
            iDetalles Store
          </h3>
          <p className="text-primary text-sm leading-tight mb-5">
            Pequeños detalles, grandes diferencias.
          </p>
          <Link
            href={urlWhatsapp}
            target="_blank"
            className="flex items-center justify-center gap-2 border rounded-xl w-fit mx-auto md:mx-0 px-3 py-1 transition duration-200 hover:scale-110 hover:border-black dark:border-white"
          >
            Mas información
            <Speech className="w-5 h-5 ml-2" strokeWidth={2} />
          </Link>
        </div>
        <div className="">
          <Image
            src="/under-construction.png"
            alt="Portada Tienda"
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
