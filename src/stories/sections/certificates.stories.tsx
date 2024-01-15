import { StoryFn } from "@storybook/react";
import Certificates from "../../sections/certificate";

export default {
  title: "Sections/Certificates",
  component: Certificates,
  parameters: {
    layout: "fullscreen",
  },
};

export const Certificates_: StoryFn = (args) => (
  <Certificates {...args}></Certificates>
);

Certificates_.args = {};
