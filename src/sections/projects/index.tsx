import { useState } from "react";
import Card from "../../components/card";
import Modal from "../../components/modal";
import Previewprojects from "../../components/preview-projects";
import { CardModels } from "../../components/card/card-models";

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
    shortDescription:
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
    shortDescription:
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
    shortDescription:
      "Esse é um exemplo de texto curto para falar um pouco sobre o projeto",
  },
];

const Projects = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [contentPreview, setContentPreview] = useState<CardModels>();

  const openModal = (data: CardModels) => {
    setIsOpenModal(true);
    setContentPreview(data);
  };

  const getCards = mock.map((item) => (
    <Card
      key={item.title}
      title={item.title}
      description={item.description}
      shortDescription={item.shortDescription}
      stampTheme={item.stampTheme}
      image={item.image}
      onClickCard={() => openModal(item)}
    ></Card>
  ));

  return (
    <>
      <section
        id="projetos"
        className="flex justify-center items-center p-16 md:p-32 pb-20 min-h-svh pt-20 bg-light-bg-01 dark:bg-dark-bg-01 "
      >
        <div className="container mx-auto flex flex-col gap-16  ">
          <div className="flex flex-col">
            <h2 className="text-center text-4xl md:text-7xl">Projetos</h2>
            <br />
            <br />
            <span className="text-center">
              Aqui, voce vai saber sobre os projetos que ja participei, ao
              clicar sobre os card voce verá um modal com mais explicação sobre
              cada projeto incrivel!
            </span>
          </div>

          <div className="flex gap-5 justify-center flex-wrap">{getCards}</div>
        </div>
      </section>
      <Modal
        size="middle"
        onClose={() => setIsOpenModal(false)}
        isOpen={isOpenModal}
      >
        <Previewprojects
          description={contentPreview?.description}
          image={contentPreview?.image}
          title={contentPreview?.title}
        />
      </Modal>
    </>
  );
};

export default Projects;
