import { CardModels } from "../../../components/card/card-models";
import Card from "../../../components/card";

const mock: CardModels[] = [
  {
    image: "",
    title: "Cursology",
    stampTheme: [
      { theme: "css" },
      { theme: "git" },
      { theme: "next" },
      { theme: "react" },
    ],
    description:
      "Esse é um exemplo de texto curto para falar um pouco sobre o projeto",
  },
  {
    image: "",
    title: "proenem",
    stampTheme: [
      { theme: "css" },
      { theme: "html" },
      { theme: "next" },
      { theme: "react" },
    ],
    description:
      "Esse é um exemplo de texto curto para falar um pouco sobre o projeto",
  },
  {
    image: "",
    title: "Trap-1e",
    stampTheme: [
      { theme: "flutter" },
      { theme: "dart" },
      { theme: "redux" },
      { theme: "css" },
    ],
    description:
      "Esse é um exemplo de texto curto para falar um pouco sobre o projeto ",
  },
];

const Projects = () => {
  const getCards = mock.map((item) => (
    <Card
      key={item.title}
      title={item.title}
      description={item.description}
      stampTheme={item.stampTheme}
      image={item.image}
    ></Card>
  ));

  return (
    <div className="bg-sky-400 pb-20 pt-20">
      <section className="container mx-auto flex flex-col gap-16 text-white">
        <div className="flex flex-col">
          <h2 className="text-center text-7xl">Projetos</h2>
          <br />
          <br />
          <span className="text-center">
            Aqui, voce vai saber sobre os projetos que ja participei, ao clicar
            sobre os card voce verá um modal com mais explicação sobre cada
            projeto incrivel!
          </span>
        </div>

        <div className="flex gap-5 justify-center flex-wrap">{getCards}</div>
      </section>
    </div>
  );
};

export default Projects;
