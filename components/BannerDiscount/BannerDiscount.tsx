import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function BannerDiscount() {
  return (
    <div className="p-5 sm:p-20 text-center">
      <h2 className="uppercase font-black text-2xl text-primary">
        Consigue hasta un -25%
      </h2>
      <h3 className="mt-3 font-semibold">
        -20% al gastar S/.100 o -25% al gastar S/.150. Usa código de iDETALLES20
      </h3>

      <div className="maw-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
        <Link href="#" className={buttonVariants({ variant: "outline" })}>
          Más información
        </Link>
      </div>
    </div>
  );
}
