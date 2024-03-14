import { StoryFn } from "@storybook/react";
import Articles from "../../sections/articles";

export default {
  title: "Sections/Articles",
  component: Articles,
  parameters: {
    layout: "fullscreen",
  },
};

export const Articles_: StoryFn = (args) => <Articles {...args}></Articles>;
