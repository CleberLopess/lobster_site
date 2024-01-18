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
    <section className="container m-auto pt-20 pb-20">
      <div className="font-Poppins text-sky-400 text-base flex flex-col gap-4">
        <h3 className=" text-center text-7xl">Certificados</h3>
        <span className="text-center">
          Aqui você verá meus certificados, classificados dos mais recentes ate
          os mais antigos, ao clicar sobre um certificado, voce será levado para
          a pagina onde ele foi emitido, convido voce a navegar entre eles!
        </span>
      </div>
      <div className="m-auto">{setCertificates()}</div>
    </section>
  );
};

export default Certificates;
