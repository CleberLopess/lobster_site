"use client";
import Image from "next/image";
import placeholder from "./assets/placeholder.png";
import Stamp from "../stamp";
import { CardModels } from "./card-models";

const Card = ({
  image,
  stampTheme,
  title,
  shortDescription,
  onClickCard,
}: CardModels) => {
  const getStamp = stampTheme?.map((item) => (
    <Stamp key={item.theme} theme={item.theme} />
  ));

  return (
    <div
      className="flex flex-col gap-2 max-w-64  rounded-lg shadow-md  hover:cursor-pointer hover:shadow-xl hover:scale-105 bg-white  dark:bg-dark-bg-02 "
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
        <h3 className="text-2xl capitalize">{title}</h3>
        <span className="text-sm">{shortDescription}</span>
      </div>
    </div>
  );
};

export default Card;
