import { ReactElement } from "react";

export interface iIconProps {
  onClick: () => void;
  icon: ReactElement;
  className?: string;
}
