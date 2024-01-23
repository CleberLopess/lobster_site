import { StoryFn } from "@storybook/react";
import Projects from "../../sections/projects";

export default {
  title: "Sections/Projects",
  component: Projects,
  parameters: {
    layout: "fullscreen",
  },
};

export const Projects_: StoryFn = (args) => <Projects {...args}></Projects>;
