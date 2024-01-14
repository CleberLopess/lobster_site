import { StoryFn } from "@storybook/react";
import Card from "../../components/card";
import { CardModels } from "../../components/card/card-models";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
};

export const Card_: StoryFn<CardModels> = (args) => <Card {...args}></Card>;

Card_.args = {
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
};
