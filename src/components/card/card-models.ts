import { VariantProps } from "tailwind-variants";
import { stampTv } from "../stamp";

export type CardModels = {
  image?: string;
  stampTheme: VariantProps<typeof stampTv>[];
  title: string;
  description: string;
};
