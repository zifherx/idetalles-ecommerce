import Link from "next/link";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import { Menu } from "lucide-react";
import { menu_mobile } from "./MenuMobile.data";
import { Separator } from "../ui/separator";

export function MenuMobile() {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        {menu_mobile.map(({ id, icon: Icon, href, title }) => (
          <Link
            key={id}
            href={href}
            className="flex items-start  text-sm cursor-pointer mt-3 p-2 hover:font-bold"
          >
            <Icon className="w-4 h-4 mr-2" />
            {title}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
}
