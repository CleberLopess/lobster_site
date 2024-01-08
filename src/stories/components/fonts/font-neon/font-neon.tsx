import { FontNeonTypes } from "./font-neon.modules";

const FontNeon = ({ children }: FontNeonTypes) => {
  return <span className="text-3xl font-bold underline">{children}</span>;
};

export default FontNeon;
