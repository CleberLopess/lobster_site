import { StoryFn } from "@storybook/react";
import Hero from "./hero";
import React from "react";

export default {
  title: "Sections/Hero Section",
  component: Hero,
};

export const HeroSection: StoryFn = (args) => <Hero {...args}></Hero>;

HeroSection.args = {};
