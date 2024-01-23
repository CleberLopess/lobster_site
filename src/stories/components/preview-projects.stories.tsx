import { StoryFn } from "@storybook/react";
import Previewprojects from "../../components/preview-projects";
import { PreviewProjectsType } from "../../components/preview-projects/preview-projects.models";
import portifolio from "../../sections/projects/assets/portifolio.png";

export default {
  title: "Components/Preview Projects",
  component: Previewprojects,
  parameters: {
    layout: "fullscreen",
  },
};

export const PreviewProjects_: StoryFn<PreviewProjectsType> = (args) => (
  <Previewprojects {...args}></Previewprojects>
);

PreviewProjects_.args = {
  title: "Projeto",
  description: "Projeto muito top top top top top top top top top top",
  image: portifolio,
};
