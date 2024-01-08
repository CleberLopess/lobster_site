import Image from "next/image";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";

const Footer = () => {
  return (
    <div className="bg-sky-400 w-dvw">
      <section className="container mx-auto p-4 flex items-center justify-between gap-6 transition-all duration-300 ">
        <div className="font-MuseoModerno text-sky-50">
          <span className="text-2xl">Desenvolvido por Cleber Lopes</span>
          <br />
          <span className="flex text-1xl w-full justify-end">
            Desenvolvedor Front-end
          </span>
        </div>
        <div className="flex gap-3">
          <a
            className="w-6 hover:w-7 transition-all duration-300"
            href="https://www.linkedin.com/in/cleber-lopess/"
            target="__black"
          >
            <Image src={linkedin} alt="linkedin"></Image>
          </a>
          <a
            className="w-6 hover:w-7 transition-all duration-300"
            href="https://github.com/CleberLopess"
            target="__black"
          >
            <Image src={github} alt="github"></Image>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
