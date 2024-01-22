import { useEffect } from "react";
import Image from "next/image";
import whatsappLogo from "./assets/whatsapp.png";
import "./whatsapp.styles.css";

const Whatsapp = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const element = document.getElementById("whatsapp-icon");
      if (element) {
        //class css
        element.classList.toggle("animate-swing");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      id="whatsapp-icon"
      className="w-16 h-16 z-8 fixed bottom-28 md:bottom-9 right-9"
      href="https://wa.me/5521991052878?text=Oi%2C+eu+vim+pelo+teu+site%2C+gostaria+de+falar+com+o+Cleber+desenvolvedor+front-end"
      target="__blanck"
    >
      <Image className="w-full h-full" src={whatsappLogo} alt="whatsapp" />
    </a>
  );
};

export default Whatsapp;
