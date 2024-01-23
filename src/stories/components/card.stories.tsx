import { StoryFn } from "@storybook/react";
import Card from "../../components/card";
import { CardModels } from "../../components/card/card-models";
import { projectsMock } from "../../sections/projects/projects.mock";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
};

export const Card_: StoryFn<CardModels> = (args) => <Card {...args}></Card>;

Card_.args = projectsMock[0];
