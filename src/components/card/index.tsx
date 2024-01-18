"use client";
import Image from "next/image";
import placeholder from "./assets/placeholder.png";
import Stamp from "../stamp";
import { CardModels } from "./card-models";

const Card = ({ image, stampTheme, title, description }: CardModels) => {
  const getStamp = stampTheme?.map((item) => (
    <Stamp key={item.theme} theme={item.theme} />
  ));

  const handleClickCard = () => {
    return console.log("cliquei no card");
  };

  return (
    <div
      className="flex flex-col gap-2 max-w-64 h-80 rounded-lg shadow-md transition-all duration-300 hover:cursor-pointer hover:shadow-xl hover:scale-105 bg-white text-black"
      onClick={handleClickCard}
    >
      <div className="min-h-[129px] flex justify-center items-center">
        <Image
          className="rounded-lg rounded-b-none"
          src={image ? image : placeholder}
          alt="project"
        />
      </div>
      <div className=" flex flex-wrap gap-1 p-2">{getStamp}</div>
      <div className="flex flex-col gap-1 p-2">
        <h3 className="font-MuseoModerno text-2xl capitalize w-max">{title}</h3>
        <span className="font-MuseoModerno text-sm">{description}</span>
      </div>
    </div>
  );
};

export default Card;
