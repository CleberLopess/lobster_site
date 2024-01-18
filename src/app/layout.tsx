import type { Metadata } from "next";
import "../styles/tailwind-global.css";
import lobsterLogo from "../../public/lobster-logo.jpg";

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
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href={lobsterLogo.src} />
      </head>
      <body>{children}</body>
    </html>
  );
}
