import { StoryFn } from "@storybook/react";
import Whatsapp from "../../components/whatsapp";

export default {
  title: "Components/Whatsapp",
  component: Whatsapp,
  parameters: {
    layout: "fullscreen",
  },
};

export const Stamp_: StoryFn = () => <Whatsapp />;
