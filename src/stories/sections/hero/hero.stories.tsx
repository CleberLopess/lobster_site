import { StoryFn } from "@storybook/react";
import HeroBanner from "../../../components/sections/hero-banner";

export default {
  title: "Sections/Hero Banner",
  component: HeroBanner,
};

export const HeroBanner_: StoryFn = (args) => (
  <HeroBanner {...args}></HeroBanner>
);

HeroBanner_.args = {};