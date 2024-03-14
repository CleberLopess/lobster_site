import Image from "next/image";
import me from "./assets/me.webp";
import Button from "../../components/button";
import Stamp from "@/components/stamp";

const Bio = () => {
  return (
    <section
      id="bio"
      className="flex justify-center items-center bg-light-bg-02 dark:bg-dark-bg-02"
    >
      <div className="container py-20 mx-auto flex flex-wrap items-center justify-center gap-3 ">
        <div className="max-w-md">
          <Image className="w-full h-full" src={me} alt="Cleber Lopes" />
        </div>
        <div className="flex flex-col gap-8 max-w-lg font-Poppins text-base  ">
          <h2>Sobre</h2>
          <div className="flex flex-col gap-4">
            <p>
              Olá! Eu me chamo Cleber e sou Desenvolvedor Front-End com 4 anos
              de experiência Especializado em criar interfaces visuais rápidas e
              fluidas, concentro-me em soluções impactantes usando:
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
              Experiência em revisão de código, atualização de legados e
              aplicação de Clean Code. Ágil com Scrum.
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
