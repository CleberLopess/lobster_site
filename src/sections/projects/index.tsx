import { useState } from "react";
import Card from "../../components/card";
import Modal from "../../components/modal";
import Previewprojects from "../../components/preview-projects";
import { CardModels } from "../../components/card/card-models";
import { projectsMock } from "./projects.mock";

const Projects = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [contentPreview, setContentPreview] = useState<CardModels>(
    projectsMock[0]
  );

  const openModal = (data: CardModels) => {
    setIsOpenModal(true);
    setContentPreview(data);
  };

  const getCards = projectsMock.map((item) => (
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
        className="flex justify-center items-center bg-light-bg-01 dark:bg-dark-bg-01 "
      >
        <div className="container py-20 mx-auto flex flex-col gap-16">
          <div className="font-Poppins text-base flex flex-col gap-8">
            <h2>Projetos</h2>
            <p className="text-center">
              Aqui, voce vai saber sobre os projetos que ja participei, ao
              clicar sobre os card voce verá um modal com mais explicação sobre
              cada projeto incrivel!
            </p>
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
          description={contentPreview!.description}
          image={contentPreview!.image}
          title={contentPreview!.title}
        />
      </Modal>
    </>
  );
};

export default Projects;
