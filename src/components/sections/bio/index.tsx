import Image from "next/image";
import me from "./assets/me.webp";

const Bio = () => {
  return (
    <div className="flex w-dvw min-h-svh p-4 ">
      <section className="container mx-auto flex flex-wrap items-center justify-center gap-3">
        <div className="max-w-xl">
          <Image src={me} alt="Cleber Lopes" />
        </div>
        <div className="max-w-lg">
          <span className="font-Poppins text-sky-400 text-base">
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
          </span>
        </div>
      </section>
    </div>
  );
};

export default Bio;
