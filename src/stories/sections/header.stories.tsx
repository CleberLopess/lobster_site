import { StoryFn } from "@storybook/react";
import Header from "../../sections/header";

export default {
  title: "Sections/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export const Header_: StoryFn = (args) => <Header {...args}></Header>;
