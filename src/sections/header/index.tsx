import Image from "next/image";
import arrowGif from "./assets/gif-arrow.gif";

const Header = () => {
  return (
    <header className="flex min-h-svh p-8 md:p-16 items-center justify-center relative bg-light-bg-01 dark:bg-dark-bg-01 ">
      <section className="container mx-auto flex items-center justify-center gap-6">
        <div className="flex flex-col justify-center   ">
          <h1 className="text-center md:text-start text-5xl md:text-7xl lg:text-8xl">
            Cleber &quot;Lobster&quot;
          </h1>
          <br />
          <span className="flex text-base w-full justify-center md:justify-end md:text-4xl">
            Desenvolvedor Front-end
          </span>
        </div>
      </section>
      <Image
        className="w-20 flex justify-center absolute bottom-0"
        src={arrowGif}
        alt="arrow grif"
      />
    </header>
  );
};

export default Header;
