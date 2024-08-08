import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export function BtnLoved() {
  const router = useRouter();
  const { lovedItems } = useLovedProducts();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Heart
            strokeWidth={2}
            className={`cursor-pointer ${
              lovedItems.length > 0 && "fill-black dark:fill-white"
            }`}
            onClick={() => router.push("/loved-products")}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-medium text-lg p-1">Ir a whishlist</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
