import Image from "next/image";
import me from "./assets/me.webp";

const Bio = () => {
  return (
    <section
      id="bio"
      className="flex w-dvw min-h-svh p-8 md:p-16 bg-light-bg-02 dark:bg-dark-bg-02"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-3 ">
        <div className="max-w-md">
          <Image className="w-full h-full" src={me} alt="Cleber Lopes" />
        </div>
        <div className="max-w-lg font-Poppins text-base text-light-color-01 dark:text-dark-color-01">
          <h2 className="text-center text-4xl md:text-7xl">Sobre</h2>
          <p>
            <br /> <br />
            Olá! <br /> <br />
            Eu me chamo Cleber, mas algumas pessoas me conhecem como Lobster :D
            <br /> <br />
            Sou um desenvolvedor front-end apaixonado por criar experiências
            digitais excepcionais. Com mais de 3 anos de experiência, mergulhei
            profundamente no mundo do desenvolvimento web, entregando soluções
            interativas e visualmente atraentes. Minha jornada tem sido marcada
            por projetos desafiadores e colaborações inspiradoras.
            <br /> <br />
            Abaixo, voce pode conferir algum dos projetos que ja fiz parte ou
            foi desenvolvido completamente por mim.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
