import { StoryFn } from "@storybook/react";
import TechnologiesItems from "../../components/technologies-items";
import { technologiesItemsType } from "../../components/technologies-items/technologiesItems.models";

export default {
  title: "Components/Technologies Items",
  component: TechnologiesItems,
  parameters: {
    layout: "fullscreen",
  },
};

export const TechnologiesItems_: StoryFn<technologiesItemsType> = (args) => (
  <TechnologiesItems {...args}></TechnologiesItems>
);

TechnologiesItems_.args = {
  technologies: "dart",
};
