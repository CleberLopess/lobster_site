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
    <div className="flex flex-col gap-4 max-w-52 min-h-64 rounded-lg shadow-md p-4 bg-white dark:bg-dark-bg-01 dark:text-dark-font-01">
      <Image src={image ? image : placeholder} alt="certificate" />
      <span className="flex text-center justify-center">{title}</span>
      <RxExternalLink
        className="flex justify-end mr-0 ml-auto mt-auto w-5 hover:cursor-pointer hover:shadow-xl hover:-skew-y-2 hover:scale-125"
        onClick={handleClickCardCertificate}
      />
    </div>
  );
};

export default CardCertificate;
