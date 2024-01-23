import React from "react";
import { FaCss3 } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiStorybook } from "react-icons/si";
import { IoLogoStencil } from "react-icons/io5";
import { SiDart } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaYarn } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { FaGithubSquare } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";

export type BookIconKey =
  | "css"
  | "javascript"
  | "html"
  | "typescript"
  | "react"
  | "redux"
  | "storybook"
  | "stencil"
  | "dart"
  | "nodejs"
  | "yarn"
  | "flutter"
  | "sass"
  | "tailwindcss"
  | "styledcomponents"
  | "git"
  | "nextjs"
  | "github"
  | "vscode"
  | "figma";

type BookIconsType = {
  [key in BookIconKey]: React.ReactNode;
};

export type technologiesItemsType = {
  technologies: BookIconKey;
};

export const bookIcons: BookIconsType = {
  css: <FaCss3 className="w-full h-full" />,
  javascript: <RiJavascriptFill className="w-full h-full" />,
  html: <FaHtml5 className="w-full h-full" />,
  typescript: <BiLogoTypescript className="w-full h-full" />,
  react: <FaReact className="w-full h-full" />,
  redux: <TbBrandRedux className="w-full h-full" />,
  storybook: <SiStorybook className="w-full h-full" />,
  stencil: <IoLogoStencil className="w-full h-full" />,
  dart: <SiDart className="w-full h-full" />,
  nodejs: <FaNodeJs className="w-full h-full" />,
  yarn: <FaYarn className="w-full h-full" />,
  flutter: <SiFlutter className="w-full h-full" />,
  sass: <SiSass className="w-full h-full" />,
  tailwindcss: <SiTailwindcss className="w-full h-full" />,
  styledcomponents: <SiStyledcomponents className="w-full h-full" />,
  git: <FaGitAlt className="w-full h-full" />,
  nextjs: <SiNextdotjs className="w-full h-full" />,
  github: <FaGithubSquare className="w-full h-full" />,
  vscode: <TbBrandVscode className="w-full h-full" />,
  figma: <FaFigma className="w-full h-full" />,
};
