import { StoryFn } from "@storybook/react";
import Button from "../../components/button";
import { ButtonType } from "../../components/button/button-models";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
};

export const Stamp_: StoryFn<ButtonType> = (args) => (
  <Button {...args}>Baixar cv</Button>
);

Stamp_.args = {
  href: "../../../static/curriculo-cleber.pdf",
};
