import { StoryFn } from "@storybook/react";
import Footer from "../../../components/sections/footer";

export default {
  title: "Sections/Footer",
  component: Footer,
};

export const Footer_: StoryFn = (args) => <Footer {...args}></Footer>;

Footer_.args = {};
