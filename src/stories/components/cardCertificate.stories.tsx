import { StoryFn } from "@storybook/react";
import certificateFlutter from "../../sections/certificate/assets/certificate-flutter.jpg";
import { cardCertificateType } from "../../components/certificate/models";
import CardCertificate from "../../components/certificate/indext";

export default {
  title: "Components/Card Certificate",
  component: CardCertificate,
  parameters: {
    layout: "fullscreen",
  },
};

export const CardCertificate_: StoryFn<cardCertificateType> = (args) => (
  <CardCertificate {...args}></CardCertificate>
);

CardCertificate_.args = {
  handleClickCardCertificate: () =>
    window.open("https://www.cod3r.com.br/certificates/nxupnkdzkm", "blank"),
  image: certificateFlutter,
  title: "Flutter: Desenvolva um Cadastro Completo",
};
