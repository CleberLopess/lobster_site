import type { Metadata } from "next";
import lobsterLogo from "../../public/lobster-not-botton.png";
import cover from "../../public/cover.png";
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
      url: cover.src,
      alt: "cleber logo",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Lobster Site",
    description: "Desenvolvedor front-end",
    creator: "Cleber Lopes",
    images: {
      url: cover.src,
      alt: "cover",
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
