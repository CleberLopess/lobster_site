"use client";

import CarouselComponent from "../../components/carousel";
import CardCertificate from "../../components/certificate/indext";
import { mockCertificate } from "./certificate.mock";

const Certificates = () => {
  const setCertificates = () => {
    return (
      <CarouselComponent>
        {mockCertificate.map((item) => (
          <CardCertificate
            handleClickCardCertificate={item.handleClickCardCertificate}
            key={item.title}
            title={item.title}
            image={item.image}
          ></CardCertificate>
        ))}
      </CarouselComponent>
    );
  };

  return (
    <section
      id="certificados"
      className="flex justify-center items-center bg-light-bg-02  dark:bg-dark-bg-02 "
    >
      <div className="container py-20 flex flex-col gap-16 m-auto">
        <div className="font-Poppins text-base flex flex-col gap-8">
          <h2>Certificados</h2>
          <p className="text-center">
            Na seção a seguir, exibo meus certificados, dispostos do mais
            recente ao mais antigo. Convido você a explorá-los e percorrer essa
            trajetória! <br />
            (Para acessar a página de emissão, clique no ícone localizado no
            rodapé do card.)
          </p>
        </div>
        {setCertificates()}
      </div>
    </section>
  );
};

export default Certificates;
