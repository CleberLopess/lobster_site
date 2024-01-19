import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light-bg-01 text-light-color-01 dark:bg-dark-bg-01 dark:text-dark-color-01 w-dvw">
      <section className="container mx-auto p-4 flex items-center justify-between gap-6 ">
        <div>
          <h2 className="text-2xl">Desenvolvido por Cleber Lopes</h2>
          <span className="flex text-1xl w-full justify-end">
            Desenvolvedor Front-end
          </span>
        </div>
        <div className="flex gap-3">
          <a
            className="w-6 hover:scale-125"
            href="https://www.linkedin.com/in/cleber-lopess/"
            target="__black"
          >
            <FaLinkedin className="w-full h-full" />
          </a>
          <a
            className="w-6 hover:scale-125"
            href="https://github.com/CleberLopess"
            target="__black"
          >
            <FaGithub className="w-full h-full" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
