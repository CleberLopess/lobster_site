import { StaticImageData } from "next/image";

export type cardCertificateType = {
  image?: string | StaticImageData;
  title: string;
  handleClickCardCertificate: () => void;
};
