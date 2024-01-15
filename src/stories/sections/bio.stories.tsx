import { StoryFn } from "@storybook/react";
import Bio from "../../sections/bio";

export default {
  title: "Sections/Bio",
  component: Bio,
  parameters: {
    layout: "fullscreen",
  },
};

export const Bio_: StoryFn = (args) => <Bio {...args}></Bio>;

Bio_.args = {};
