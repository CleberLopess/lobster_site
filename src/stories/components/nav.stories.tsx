import { StoryFn } from "@storybook/react";
import Nav from "../../components/nav";

export default {
  title: "Components/Nav",
  component: Nav,
  parameters: {
    layout: "fullscreen",
  },
};

export const Header_: StoryFn = (args) => <Nav {...args}></Nav>;

Header_.args = {};
