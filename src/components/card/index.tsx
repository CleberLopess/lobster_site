"use client";
import Image from "next/image";
import placeholder from "./assets/placeholder.png";
import Stamp from "../stamp";
import { CardModels } from "./card-models";

const Card = ({
  image,
  stampTheme,
  title,
  description,
  onClickCard,
}: CardModels) => {
  const getStamp = stampTheme?.map((item) => (
    <Stamp key={item.theme} theme={item.theme} />
  ));

  return (
    <div
      className="flex flex-col gap-2 max-w-64 h-80 rounded-lg shadow-md  hover:cursor-pointer hover:shadow-xl hover:scale-105 backdrop-blur-sm bg-white text-light-color-01 dark:bg-dark-bg-02 dark:text-dark-color-01"
      onClick={onClickCard}
    >
      <div className="min-h-[128px] flex justify-center items-center">
        <Image
          className="rounded-lg rounded-b-none"
          src={image ? image : placeholder}
          alt="project"
        />
      </div>
      <div className=" flex flex-wrap gap-1 p-2">{getStamp}</div>
      <div className="flex flex-col gap-1 p-2">
        <h3 className="text-2xl capitalize w-max">{title}</h3>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
};

export default Card;
