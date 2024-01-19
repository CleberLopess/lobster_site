"use client";

import Nav from "../components/nav";
import Header from "../sections/header";
import Bio from "../sections/bio";
import Projects from "../sections/projects";
import Certificates from "../sections/certificate";
import Footer from "../sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Bio />
      <Projects />
      <Certificates />
      <Footer />
    </>
  );
}
