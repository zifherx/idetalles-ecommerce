import { cn } from "@/lib/utils";
import { iIconProps } from "./Icon.interface";

export function IconButton(props: iIconProps) {
  const { icon, onClick, className } = props;
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  );
}
