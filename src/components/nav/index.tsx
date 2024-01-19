import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { themeModeEnum } from "./nav.models";
import lobsterLogo from "../../../public/lobster-not-botton.png";

const Nav = () => {
  const [themeMode, setThemeMode] = useState<themeModeEnum>(themeModeEnum.DARK);

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

  return (
    <nav className=" w-full fixed p-4 top-0 left-0 z-2 shadow-md bg-light-bg-02 text-light-color-01 dark:bg-dark-bg-02 dark:text-dark-color-01">
      <div className="flex w-full relative font-Poppins items-center">
        <Image
          className="absolute w-12 left-2/4 m-auto"
          src={lobsterLogo}
          alt="lobster"
        />
        <ul className="flex gap-4">
          <li className="hover:scale-110">
            <a href="#bio">Bio</a>
          </li>
          <li className="hover:scale-110">
            <a href="=projetos">Projetos</a>
          </li>
          <li className="hover:scale-110">
            <a href="#certificados">Certificados</a>
          </li>
        </ul>
        <a
          href="../../../static/curriculo-cleber.pdf"
          target="__blanck"
          className="ml-auto mr-0 p-2 rounded-lg bg-dark-bg-02 text-dark-color-01 dark:bg-light-bg-02 dark:text-light-color-01 hover:scale-110"
        >
          Baixar CV
        </a>
        <button className="ml-10 mr-0 w-5" onClick={() => setThemeSite()}>
          {setIconButton()}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
