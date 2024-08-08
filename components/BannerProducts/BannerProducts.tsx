import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function BannerProducts() {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Pequeño detalles, grandes diferencias</p>
        <h4 className="mt-2 text-5xl font-extrabold">
          Detalles Personalizados
        </h4>
        <p className="my-2 text-lg">Sumérgete en una experiencia única</p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div className="h-[350px] md:h-[900px] rounded-lg bg-[url('/bg-portada-2.png')] bg-cover bg-center mt-5"></div>
    </>
  );
}
