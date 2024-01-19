import type { Metadata } from "next";
import lobsterLogo from "../../public/lobster-not-botton.png";
import "../styles/tailwind-global.css";

export const metadata: Metadata = {
  title: "Lobster Site",
  description: "Desenvolvedor front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" theme-mode="">
      <head>
        <link rel="shortcut icon" href={lobsterLogo.src} />
      </head>
      <body>{children}</body>
    </html>
  );
}
