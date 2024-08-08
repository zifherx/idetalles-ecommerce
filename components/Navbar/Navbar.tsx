"use client";
import { useRouter } from "next/navigation";
import { BtnCart } from "../BtnCart";
import { BtnLoved } from "../BtnLoved";
import { BtnUser } from "../BtnUser";
import { MenuList } from "../Menu-List";
import { MenuMobile } from "../Menu-Mobile";
import { ToogleTheme } from "../Toggle-Theme";

export function Navbar() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1
        className="text-xl md:text-3xl degradedBlue bg-blueLight"
        onClick={() => router.push("/")}
      >
        iDetalles <span className="font-bold">Store</span>
      </h1>

      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>

      <div className="flex sm:hidden">
        <MenuMobile />
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <BtnCart />
        <BtnLoved />
        {/* <BtnUser /> */}
        <ToogleTheme />
      </div>
    </div>
  );
}
