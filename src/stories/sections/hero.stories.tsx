import { StoryFn } from "@storybook/react";
import HeroBanner from "../../sections/hero-banner";

export default {
  title: "Sections/Hero Banner",
  component: HeroBanner,
  parameters: {
    layout: "fullscreen",
  },
};

export const HeroBanner_: StoryFn = (args) => (
  <HeroBanner {...args}></HeroBanner>
);

HeroBanner_.args = {};
