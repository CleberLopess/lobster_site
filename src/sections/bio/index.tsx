import Image from "next/image";
import me from "./assets/me.webp";
import Button from "../../components/button";
import Stamp from "@/components/stamp";

const Bio = () => {
  return (
    <section
      id="bio"
      className="flex justify-center items-center w-dvw min-h-svh p-8 md:p-16 bg-light-bg-02 dark:bg-dark-bg-02"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-3 ">
        <div className="max-w-md">
          <Image className="w-full h-full" src={me} alt="Cleber Lopes" />
        </div>
        <div className="max-w-lg font-Poppins text-base  ">
          <h2 className="text-center text-4xl md:text-7xl">Sobre</h2>
          <div className="mt-16">
            <p>
              Olá! <br /> <br />
              Eu me chamo Cleber e sou Desenvolvedor Front-End com 4 anos de
              experiência Especializado em criar interfaces visuais rápidas e
              fluidas, concentro-me em soluções impactantes usando:
              <br /> <br />
            </p>
            <div className="flex flex-wrap gap-2">
              <Stamp theme="javascript" />
              <Stamp theme="css" />
              <Stamp theme="tailwind" />
              <Stamp theme="html" />
              <Stamp theme="react" />
              <Stamp theme="git" />
              <Stamp theme="next" />
              <Stamp theme="storybook" />
            </div>
            <p>
              <br />
              Experiência em revisão de código, atualização de legados e
              aplicação de Clean Code. Ágil com Scrum.
              <br />
              <br />
            </p>
          </div>
          <Button href="../../../static/curriculo-cleber.pdf" target="__blanck">
            Baixar CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Bio;
