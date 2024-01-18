import Image from "next/image";
import arrowGif from "./assets/gif-arrow.gif";

const HeroBanner = () => {
  return (
    <div className="flex min-h-svh items-center justify-center relative bg-sky-400 ">
      <section className="container mx-auto flex items-center justify-center gap-6">
        <div className="flex flex-col justify-center text-white font-MuseoModerno">
          <span className="text-start text-5xl transition-all duration-300 md:text-8xl">
            Cleber &quot;Lobster&quot;
          </span>
          <br />
          <span className="flex text-2xl w-full justify-end text-end transition-all duration-300 md:text-4xl">
            Desenvolvedor Front-end
          </span>
        </div>
      </section>
      <Image
        className="w-20 flex justify-center absolute bottom-0"
        src={arrowGif}
        alt=""
      />
    </div>
  );
};

export default HeroBanner;
