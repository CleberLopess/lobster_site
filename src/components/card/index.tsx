import Image from "next/image";
import placeholder from "./assets/placeholder.png";

const Card = () => {
  return (
    <div>
      <div>
        <Image src={placeholder} alt="placeholder" />
      </div>
      <div>
        <h3>Titulo do card</h3>
        <span>
          Esse é um exemplo de texto curto para falar um pouco sobre o projeto
        </span>
      </div>
    </div>
  );
};

export default Card;
