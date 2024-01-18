import Image from "next/image";
import { cardCertificateType } from "./models";
import placeholder from "./assets/placeholder.png";
import { RxExternalLink } from "react-icons/rx";

const CardCertificate = ({
  handleClickCardCertificate,
  image,
  title,
}: cardCertificateType) => {
  return (
    <div
      className="flex flex-col gap-4 max-w-52 rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 hover:cursor-pointer hover:shadow-xl hover:-skew-y-2 bg-white text-black"
      onClick={handleClickCardCertificate}
    >
      <Image src={image ? image : placeholder} alt="certificate" />
      <span className="flex text-center font-MuseoModerno">{title}</span>
      <RxExternalLink className="flex justify-end mr-0 ml-auto w-5" />
    </div>
  );
};

export default CardCertificate;
