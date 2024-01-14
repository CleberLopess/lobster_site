import { useMemo } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const stampTv = tv({
  base: "font-MuseoModerno text-xs text-white p-2 pt-1 pb-1 font-medium capitalize w-fit rounded-full transition-all duration-300 hover:cursor-default",
  variants: {
    theme: {
      css: "bg-blue-500 hover:bg-blue-700",
      dart: "bg-blue-500 hover:bg-blue-700",
      flutter: "bg-blue-400 hover:bg-blue-600",
      git: "bg-orange-500 hover:bg-orange-700",
      html: "bg-orange-500 hover:bg-orange-700",
      javascript: "bg-yellow-500 hover:bg-yellow-700",
      next: "bg-black hover:bg-gray-600",
      node: "bg-green-500 hover:bg-green-700",
      react: "bg-blue-800 hover:bg-blue-600",
      redux: "bg-purple-500 hover:bg-purple-700",
      sass: "bg-pink-500 hover:bg-pink-700",
      styledComponent: "bg-pink-500 hover:bg-pink-700",
      stencil: "bg-black hover:bg-gray-600",
      tailwind: "bg-blue-400 hover:bg-blue-600",
      typescript: "bg-blue-500 hover:bg-blue-700",
    },
  },
  defaultVariants: {
    theme: "typescript",
  },
});

const Stamp = ({ theme }: VariantProps<typeof stampTv>) => {
  const getLabel = useMemo(
    () => (theme === "styledComponent" ? "styled component" : theme),
    [theme]
  );

  return <div className={stampTv({ theme })}>{getLabel}</div>;
};

export default Stamp;
