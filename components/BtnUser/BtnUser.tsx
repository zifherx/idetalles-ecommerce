import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { User } from "lucide-react";

export function BtnUser() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <User strokeWidth={2} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-medium text-lg p-1">Ir a mi cuenta</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
