import { StoryFn } from "@storybook/react";
import CarouselComponent from "../../components/carousel";
import { CardCertificate_ } from "./cardCertificate.stories";

export default {
  title: "Components/Carousel Component",
  component: CarouselComponent,
  parameters: {
    layout: "fullscreen",
  },
};

export const CarouselComponent_: StoryFn = () => (
  <CarouselComponent>
    <CardCertificate_
      handleClickCardCertificate={
        CardCertificate_.args?.handleClickCardCertificate!
      }
      title={CardCertificate_.args?.title!}
      image={CardCertificate_.args?.image}
      key={CardCertificate_.args?.title}
      {...CardCertificate_.args}
    ></CardCertificate_>
    <CardCertificate_
      handleClickCardCertificate={
        CardCertificate_.args?.handleClickCardCertificate!
      }
      title={CardCertificate_.args?.title!}
      image={CardCertificate_.args?.image}
      key={CardCertificate_.args?.title}
      {...CardCertificate_.args}
    ></CardCertificate_>
    <CardCertificate_
      handleClickCardCertificate={
        CardCertificate_.args?.handleClickCardCertificate!
      }
      title={CardCertificate_.args?.title!}
      image={CardCertificate_.args?.image}
      key={CardCertificate_.args?.title}
      {...CardCertificate_.args}
    ></CardCertificate_>
    <CardCertificate_
      handleClickCardCertificate={
        CardCertificate_.args?.handleClickCardCertificate!
      }
      title={CardCertificate_.args?.title!}
      image={CardCertificate_.args?.image}
      key={CardCertificate_.args?.title}
      {...CardCertificate_.args}
    ></CardCertificate_>
    <CardCertificate_
      handleClickCardCertificate={
        CardCertificate_.args?.handleClickCardCertificate!
      }
      title={CardCertificate_.args?.title!}
      image={CardCertificate_.args?.image}
      key={CardCertificate_.args?.title}
      {...CardCertificate_.args}
    ></CardCertificate_>
    <CardCertificate_
      handleClickCardCertificate={
        CardCertificate_.args?.handleClickCardCertificate!
      }
      title={CardCertificate_.args?.title!}
      image={CardCertificate_.args?.image}
      key={CardCertificate_.args?.title}
      {...CardCertificate_.args}
    ></CardCertificate_>
  </CarouselComponent>
);

CarouselComponent_.args = {};
