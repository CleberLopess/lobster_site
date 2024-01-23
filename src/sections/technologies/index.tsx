import Marquee from "react-fast-marquee";
import TechnologiesItems from "../../components/technologies-items";
import { nameTechnologies } from "./technologies.mock";

const Technologies = () => {
  const getTechnologies = () => {
    return (
      <div className="flex gap-8 justify-between w-full pl-8">
        {nameTechnologies.map((item) => (
          <TechnologiesItems key={item} technologies={item} />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full  bg-light-bg-01 dark:bg-dark-bg-01 pb-8">
      <div className="flex justify-center m-auto ">
        <Marquee speed={40} pauseOnHover autoFill>
          {getTechnologies()}
        </Marquee>
      </div>
    </section>
  );
};

export default Technologies;
