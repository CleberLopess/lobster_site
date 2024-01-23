import Image from "next/image";
import { PreviewProjectsType } from "./preview-projects.models";
import placeholder from "./assets/placeholder.png";

const Previewprojects = ({
  image,
  title,
  description,
}: PreviewProjectsType) => {
  return (
    <div className="flex flex-col w-full h-full md:flex-row">
      <Image
        className="object-cover h-48 w-full md:w-2/3 md:h-full"
        src={image ? image : placeholder}
        alt="project-ilustration"
      />
      <div className="flex flex-col gap-4 p-2">
        <h3 className="text-xl capitalize  text-light-color-01">{title}</h3>
        <span className="text-left  text-light-color-01">{description}</span>
      </div>
    </div>
  );
};

export default Previewprojects;
