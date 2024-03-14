import { StoryFn } from "@storybook/react";
import PreviewCard from "@/components/preview-card";
import { PreviewCardTypes } from "@/components/preview-card/models";

export default {
  title: "Components/preview-card",
  component: PreviewCard,
  parameters: {
    layout: "fullscreen",
  },
};

export const PreviewCard_: StoryFn<PreviewCardTypes> = (args) => (
  <PreviewCard {...args} />
);

PreviewCard_.args = {
  onClickCard: () => window.open("https://lobster-site.vercel.app/", "blank"),
  url: "https://lobster-site.vercel.app/",
};
