"use client";

import Nav from "../components/nav";
import Header from "../sections/header";
import Technologies from "../sections/technologies";
import Bio from "../sections/bio";
import Projects from "../sections/projects";
import Certificates from "../sections/certificate";
import Footer from "../sections/footer";
import Whatsapp from "../components/whatsapp";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Technologies />
      <Bio />
      <Projects />
      <Certificates />
      <Footer />
      <Whatsapp />
    </>
  );
}
