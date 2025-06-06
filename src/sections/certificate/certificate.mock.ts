import { cardCertificateType } from "../../components/certificate/models";
import certificateHeroCode from "./assets/certificate-herocode.png";
import certificateFlutter from "./assets/certificate-flutter.jpg";
import certificateAngular from "./assets/certificate-angular.jpg";
import certificateVsCode from "./assets/certificate-vscode.jpg";
import certificateReactNative from "./assets/certificate-reactNative.jpg";
import certificatePyton from "./assets/certificate-pyton.jpg";
import certificateJavaScript from "./assets/certificate-javaScript.jpg";
import certificateOrganização from "./assets/certificate-organizaçãoDeEquipe.png";
import certificateScrum from "./assets/certificate-scrum.png";
import certificateArquiteturaLimpa from "./assets/certificate-arquiteturaLimpa.jpg";

export const mockCertificate: cardCertificateType[] = [
  {
    handleClickCardCertificate: () =>
      window.open(
        "https://www.udemy.com/certificate/UC-f7d2f505-f482-4419-acf3-d1fb4fb38eba/",
        "blank"
      ),
    image: certificateArquiteturaLimpa,
    title: "Domine a arquitetura limpa e hexagonal",
  },
  {
    handleClickCardCertificate: () =>
      window.open(
        "https://herocode.com.br/api/certificate/?id=07505af0-09f0-4649-80ec-b84a991f1614",
        "blank"
      ),
    image: certificateHeroCode,
    title: "Sistema com Comunicação em tempo real",
  },
  {
    handleClickCardCertificate: () =>
      window.open("https://www.cod3r.com.br/certificates/nxupnkdzkm", "blank"),
    image: certificateFlutter,
    title: "Flutter: Desenvolva um Cadastro Completo",
  },
  {
    handleClickCardCertificate: () =>
      window.open("https://www.cod3r.com.br/certificates/mku1npiq2l", "blank"),
    image: certificateAngular,
    title: "Angular 9 - Essencial",
  },
  {
    handleClickCardCertificate: () =>
      window.open("https://www.cod3r.com.br/certificates/fqz8ycca7h", "blank"),
    image: certificateVsCode,
    title: "Produtividade com VSCode",
  },
  {
    handleClickCardCertificate: () =>
      window.open("https://www.cod3r.com.br/certificates/yofzawpdvi", "blank"),
    image: certificateReactNative,
    title: "React Native com Hooks e Context API",
  },
  {
    handleClickCardCertificate: () =>
      window.open("https://www.cod3r.com.br/certificates/blhck0okkk", "blank"),
    image: certificatePyton,
    title: "Python 3 - Curso Rápido",
  },
  {
    handleClickCardCertificate: () =>
      window.open("https://www.cod3r.com.br/certificates/5f9ele7nkj", "blank"),
    image: certificateJavaScript,
    title: "Fundamentos de Javascript Funcional",
  },
  {
    handleClickCardCertificate: () =>
      window.open(
        "https://cursos.alura.com.br/certificate/21de90c9-3db8-42b0-9e10-6c849300dac8",
        "blank"
      ),
    image: certificateOrganização,
    title: "Organização de Equipes Ágeis",
  },
  {
    handleClickCardCertificate: () =>
      window.open(
        "https://cursos.alura.com.br/certificate/5ee6e82e-2159-42cd-aa22-686267af5128",
        "blank"
      ),
    image: certificateScrum,
    title: "Scrum: agilidade em seu projeto",
  },
];
