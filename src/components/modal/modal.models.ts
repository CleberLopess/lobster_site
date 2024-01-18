import { VariantProps } from "tailwind-variants";
import { ReactNode } from "react";
import { modalTv } from ".";

export type modalType = {
  onClose: () => void;
  size: VariantProps<typeof modalTv>["size"];
  isOpen?: boolean;
  children: ReactNode;
};
