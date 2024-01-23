import { StoryFn } from "@storybook/react";
import Technologies from "../../sections/technologies";

export default {
  title: "Sections/Technologies",
  component: Technologies,
  parameters: {
    layout: "fullscreen",
  },
};

export const Technologies_: StoryFn = (args) => (
  <Technologies {...args}></Technologies>
);
