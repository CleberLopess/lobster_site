import { StoryFn } from "@storybook/react";
import Card from "@/components/card";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
};

export const Card_: StoryFn = (args) => <Card {...args}></Card>;

Card_.args = {};
