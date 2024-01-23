import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { themeModeEnum } from "./nav.models";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import lobsterLogo from "../../../public/lobster-not-botton.png";
import Button from "../button";
import { removeScroll } from "../../../utils/functions";

const Nav = () => {
  const [themeMode, setThemeMode] = useState<themeModeEnum>(themeModeEnum.DARK);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    removeScroll(isOpen);
  }, [isOpen]);

  const setIconButton = useCallback(() => {
    switch (themeMode) {
      case themeModeEnum.DARK:
        return <MdLightMode className="w-full h-full" />;

      case themeModeEnum.LIGHT:
        return <MdDarkMode className="w-full h-full" />;
    }
  }, [themeMode]);

  useEffect(() => {
    setIconButton();
  }, [setIconButton]);

  const setThemeSite = () => {
    switch (themeMode) {
      case themeModeEnum.DARK:
        document.documentElement.setAttribute("theme-mode", "light");

        return setThemeMode(themeModeEnum.LIGHT);

      case themeModeEnum.LIGHT:
        document.documentElement.setAttribute("theme-mode", "dark");
        return setThemeMode(themeModeEnum.DARK);
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navMobile = () => {
    return (
      <div className="flex flex-col items-end ml-auto w-full md:hidden">
        <Image className="w-12 m-auto" src={lobsterLogo} alt="lobster" />

        <button className="flex w-6 h-6 absolute top-7" onClick={toggleNavbar}>
          <IoMdClose
            className={`absolute w-full h-full    ${
              isOpen ? `opacity-100` : `opacity-0`
            }`}
          />

          <RxHamburgerMenu
            className={` absolute w-full h-full    ${
              isOpen ? `opacity-0` : `opacity-100`
            }`}
          />
        </button>

        <div
          className={`flex flex-col lg:flex overflow-hidden w-full lg:items-center  ${
            isOpen ? "h-svh" : "h-0"
          }`}
        >
          <ul className="flex flex-col justify-center items-center gap-8 w-full text-4xl border-b-4 pb-8 border-b-dark-bg-01  lg:flex-row lg:gap-4 mt-4 lg:mt-0 ">
            <button className="ml-auto w-5" onClick={() => setThemeSite()}>
              {setIconButton()}
            </button>
            <li className="hover:scale-110 ">
              <a href="#bio" onClick={toggleNavbar}>
                Bio
              </a>
            </li>
            <li className="hover:scale-110">
              <a href="#projetos" onClick={toggleNavbar}>
                Projetos
              </a>
            </li>
            <li className="hover:scale-110">
              <a href="#certificados" onClick={toggleNavbar}>
                Certificados
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <Button
              href="../../../static/curriculo-cleber.pdf"
              target="__blanck"
            >
              Baixar CV
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const navDesktop = () => {
    return (
      <div className="hidden md:flex container w-full relative font-Poppins items-center">
        <Image
          className="absolute w-12 left-0 right-0 m-auto"
          src={lobsterLogo}
          alt="lobster"
        />
        <ul className="flex gap-4">
          <li className="hover:scale-110">
            <a href="#bio">Bio</a>
          </li>
          <li className="hover:scale-110">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="hover:scale-110">
            <a href="#certificados">Certificados</a>
          </li>
        </ul>
        <div className="ml-auto">
          <Button href="../../../static/curriculo-cleber.pdf" target="__blanck">
            Baixar CV
          </Button>
        </div>
        <button className="ml-10 mr-0 w-5" onClick={() => setThemeSite()}>
          {setIconButton()}
        </button>
      </div>
    );
  };

  return (
    <nav
      className={`flex justify-center items-center w-full min-h-[72px] fixed p-4 top-0 left-0 z-2 shadow-md bg-light-bg-02  dark:bg-dark-bg-02 ${
        isOpen && "z-9"
      }`}
    >
      {navMobile()}
      {navDesktop()}
    </nav>
  );
};

export default Nav;
