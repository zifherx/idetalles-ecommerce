import Link from "next/link";
import { footer_data } from "./Footer.data";
import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-3 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold">iDetalles</span> Store
          </p>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {footer_data.map(({ id, link, title }) => (
              <li key={id}>
                <Link href={link} className="hover:underline me-4 md:me-6">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2024 - <Link href="https://ziphonex.com">Ziphonex.</Link>Todos
          los derechos reservados
        </span>
      </div>
    </footer>
  );
}
