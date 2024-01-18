import { StoryFn } from "@storybook/react";
import Modal from "../../components/modal";
import { modalType } from "../../components/modal/modal.models";
import { PreviewProjects_ } from "./preview-projects.stories";
import Previewprojects from "../../components/preview-projects";

export default {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
};

export const Modal_: StoryFn<modalType> = (args) => (
  <Modal {...args}>
    <Previewprojects {...PreviewProjects_.args}></Previewprojects>
  </Modal>
);

Modal_.args = {
  onClose: () => {},
  size: "middle",
  isOpen: true,
};
