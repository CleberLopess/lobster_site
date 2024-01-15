import { StoryFn } from "@storybook/react";
import { VariantProps } from "tailwind-variants";
import Stamp, { stampTv } from "../../components/stamp";

export default {
  title: "Components/Stamp",
  component: Stamp,
  parameters: {
    layout: "fullscreen",
  },
};

export const Stamp_: StoryFn<VariantProps<typeof stampTv>> = (args) => (
  <Stamp {...args}></Stamp>
);

Stamp_.args = {
  theme: "typescript",
};
