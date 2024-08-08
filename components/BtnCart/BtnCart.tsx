import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCart } from "@/hooks/use-cart";
import { BaggageClaim, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export function BtnCart() {
  const router = useRouter();
  const cart = useCart();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {cart.items.length === 0 ? (
            <ShoppingCart
              strokeWidth={2}
              className="cursor-pointer"
              onClick={() => router.push("/cart")}
            />
          ) : (
            <div className="flex gap-1" onClick={() => router.push("/cart")}>
              <BaggageClaim strokeWidth={2} className="cursor-pointer" />
              <span>{cart.items.length}</span>
            </div>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-medium text-lg p-1">Ir al carrito</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
