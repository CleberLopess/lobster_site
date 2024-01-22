"use client";

import CarouselComponent from "../../components/carousel";
import CardCertificate from "../../components/certificate/indext";
import { mockCertificate } from "./mock";

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
      className="flex justify-center items-center p-8 md:p-16 bg-light-bg-02  dark:bg-dark-bg-02 "
    >
      <div className="container m-auto pt-20 pb-20">
        <div className="font-Poppins text-base flex flex-col gap-4">
          <h2 className="text-4xl md:text-7xl text-center">Certificados</h2>
          <p className="text-center">
            Aqui você verá meus certificados, classificados dos mais recentes
            ate os mais antigos, ao clicar sobre um certificado, voce será
            levado para a pagina onde ele foi emitido, convido voce a navegar
            entre eles!
          </p>
        </div>
        <div className="m-auto">{setCertificates()}</div>
      </div>
    </section>
  );
};

export default Certificates;
