import Image from "next/image";
import me from "./assets/me.webp";
import Button from "../../components/button";

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
          <p>
            <br /> <br />
            Olá! <br /> <br />
            Olá! Eu me chamo Cleber, mas algumas pessoas me conhecem como
            Lobster :D
            <br /> <br />
            Sou um desenvolvedor front-end apaixonado por criar experiências
            digitais excepcionais. Com mais de 3 anos de experiência, mergulhei
            profundamente no mundo do desenvolvimento web, entregando soluções
            interativas e visualmente atraentes. Minha jornada tem sido marcada
            por projetos desafiadores e colaborações inspiradoras.
            <br /> <br />
            Abaixo, você pode conferir alguns dos projetos dos quais já fiz
            parte ou que foram desenvolvidos completamente por mim.
          </p>
          <br /> <br />
          <Button href="../../../static/curriculo-cleber.pdf" target="__blanck">
            Baixar CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Bio;
