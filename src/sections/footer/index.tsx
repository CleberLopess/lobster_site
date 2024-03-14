import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-light-bg-02  dark:bg-dark-bg-02  w-dvw">
      <div className="container mx-auto p-4 flex items-center justify-between gap-6 ">
        <div>
          <h3>Desenvolvido por Cleber Lopes</h3>
          <span className="flex text-1xl w-full">Desenvolvedor Front-end</span>
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
      </div>
    </footer>
  );
};

export default Footer;
