import type { Metadata } from "next";
import lobsterLogo from "../../public/lobster-not-botton.png";
import "../styles/tailwind-global.css";

export const metadata: Metadata = {
  applicationName: "Portifólio",
  title: "Lobster Site",
  description: "Desenvolvedor front-end",
  creator: "Cleber Lopes",
  generator: "Next.js",
  keywords: "portifolio, cleber lopes, desenvolvedor, front-end",
  publisher: "Vercel",
  openGraph: {
    title: "Lobster Site",
    description: "Desenvolvedor front-end",
    creators: "Cleber Lopes",
    emails: "cleberlopes777@gmail.com",
    images: {
      url: lobsterLogo.src,
      alt: "cleber logo",
    },
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
