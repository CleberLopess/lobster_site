import { StoryFn } from "@storybook/react";
import Hero from "../../../components/sections/hero-banner/hero-banner";

export default {
  title: "Sections/Hero Banner",
  component: Hero,
};

export const HeroBanner: StoryFn = (args) => <Hero {...args}></Hero>;

HeroBanner.args = {};
