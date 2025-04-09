import type { Metadata } from "next";
import lobsterLogo from "/public/lobster-not-botton.png";
import "../styles/tailwind-global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cleberlobster.com.br/"),
  applicationName: "Portifólio Cleber Lopes",
  title: "Cleber Lopes - Desenvolvedor front-end",
  description: "Portifólio pessoal do Cleber Lopes - Desenvolvedor front-end",
  creator: "Cleber Lopes",
  generator: "Next.js",
  keywords: "portifolio, cleber lopes, desenvolvedor, front-end, lobster",
  publisher: "Vercel",
  openGraph: {
    url: "https://www.cleberlobster.com.br/",
    title: "Cleber Lopes - Desenvolvedor front-end",
    description: "Portifólio pessoal do Cleber Lopes - Desenvolvedor front-end",
    creators: "Cleber Lopes",
    images: [
      {
        url: "https://www.cleberlobster.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportifolio.2dbe1cde.png&w=1920&q=75",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleber Lopes - Desenvolvedor front-end",
    description: "Portifólio pessoal do Cleber Lopes - Desenvolvedor front-end",
    creator: "Cleber Lopes",
    images: [
      {
        url: "https://www.cleberlobster.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportifolio.2dbe1cde.png&w=1920&q=75",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" theme-mode="dark">
      <head>
        <link rel="shortcut icon" href={lobsterLogo.src} />
      </head>
      <body>{children}</body>
    </html>
  );
}
