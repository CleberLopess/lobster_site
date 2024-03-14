import type { Metadata } from "next";
import lobsterLogo from "/public/lobster-not-botton.png";
import "../styles/tailwind-global.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  applicationName: "Portifólio Cleber Lopes",
  title: "Lobster Site - Cleber Lopes",
  description: "Portifólio pessoal do Cleber Lopes - Desenvolvedor front-end",
  creator: "Cleber Lopes",
  generator: "Next.js",
  keywords: "portifolio, cleber lopes, desenvolvedor, front-end",
  publisher: "Vercel",
  openGraph: {
    title: "Lobster Site - Cleber Lopes",
    description: "Portifólio pessoal do Cleber Lopes - Desenvolvedor front-end",
    creators: "Cleber Lopes",
    emails: "cleberlopes777@gmail.com",
    images: "/public/cover.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lobster Site - Cleber Lopes",
    description: "Portifólio pessoal do Cleber Lopes - Desenvolvedor front-end",
    creator: "Cleber Lopes",
    images: "/public/cover.png",
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
