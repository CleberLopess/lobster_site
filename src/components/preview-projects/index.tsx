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
        src={image ? image : placeholder}
        alt="project-ilustration"
        className="object-cover h-36 w-full md:w-1/3 md:h-full"
      />
      <div className="flex flex-col gap-4 p-2">
        <h3 className="font-MuseoModerno text-xl capitalize">{title}</h3>
        <span className="text-left">{description}</span>
      </div>
    </div>
  );
};

export default Previewprojects;
