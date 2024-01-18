import Image from "next/image";
import arrowGif from "./assets/gif-arrow.gif";

const HeroBanner = () => {
  return (
    <div className="flex min-h-svh items-center justify-center relative bg-sky-400 ">
      <section className="container mx-auto flex items-center justify-center gap-6">
        <div className="text-white  font-MuseoModerno">
          <span className="text-8xl">Cleber &quot;Lobster&quot;</span>
          <br />
          <span className="flex text-4xl w-full justify-end">
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
