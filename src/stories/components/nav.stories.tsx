import { StoryFn } from "@storybook/react";
import Nav from "../../components/nav";

export default {
  title: "Components/Nav",
  component: Nav,
  parameters: {
    layout: "fullscreen",
  },
};

export const Nav_: StoryFn = (args) => <Nav {...args}></Nav>;

Nav_.args = {};
