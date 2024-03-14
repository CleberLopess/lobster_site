import { VariantProps } from "tailwind-variants";
import { stampTv } from "../stamp";
import { StaticImageData } from "next/image";

export type CardModels = {
  image: StaticImageData;
  stampTheme?: VariantProps<typeof stampTv>[];
  title: string;
  shortDescription?: string;
  description?: string;
  onClickCard?: () => void;
};
