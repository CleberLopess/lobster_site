import { VariantProps } from "tailwind-variants";
import { stampTv } from "../stamp";

export type CardModels = {
  image?: string;
  stampTheme: VariantProps<typeof stampTv>[];
  title: string;
  shortDescription: string;
  description: string;
  onClickCard?: () => void;
};
