import { FontNeonTypes } from "./font-neon.modules";
import "./font-neon.css";

const FontNeon = ({ children }: FontNeonTypes) => {
  return <span className="span">{children}</span>;
};

export default FontNeon;
