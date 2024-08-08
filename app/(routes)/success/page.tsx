"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PageSuccess() {
  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 ms:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex justify-center md:min-w-[400px]">
          <Image
            src="/success.jpg"
            alt="Success"
            width={300}
            height={600}
            className="rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl ">¡Gracias por tu compra!</h1>
          <p className="my-3">
            En breve, nuestro equipo se pondrá manos a la obra para alistar el
            detalle personalizado y preparar el envío con cuidado y dedicación.
            Meintras tanto, siéntate, relájate y deja que la anticipación de la
            buena experiencia te envuelva.
          </p>
          <p className="my-3">
            Gracias de nuevo pro confiar en nosotros para sorprender a ese ser
            querido. ¡Estamos deseando que continues con la experiencia de
            iDetalles!
          </p>
          <p className="my-3">¡Disfruta del iDetallazo!</p>

          <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
        </div>
      </div>
    </div>
  );
}
