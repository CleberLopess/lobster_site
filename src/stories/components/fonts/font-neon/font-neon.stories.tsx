import { StoryFn } from "@storybook/react";
import FontNeon from "./font-neon";
import { FontNeonTypes } from "./font-neon.modules";

export default {
  title: "Fonts/Font neon",
  component: FontNeon,
};

export const Fontneon: StoryFn<FontNeonTypes> = (args) => (
  <FontNeon {...args}></FontNeon>
);

Fontneon.args = {
  children: "Teste de fonte",
};
