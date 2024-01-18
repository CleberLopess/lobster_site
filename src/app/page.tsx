import HeroBanner from "../sections/hero-banner";
import Bio from "../sections/bio";
import Footer from "../sections/footer";
import Projects from "../sections/projects";
import Certificates from "@/sections/certificate";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Bio />
      <Projects />
      <Certificates />
      <Footer />
    </>
  );
}
