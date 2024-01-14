import { VariantProps } from "tailwind-variants";
import { stampTv } from "../stamp";

export interface CardModels {
  image?: string;
  stampTheme: VariantProps<typeof stampTv>[];
  title: string;
  description: string;
}
