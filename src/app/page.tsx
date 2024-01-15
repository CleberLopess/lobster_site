import HeroBanner from "../components/sections/hero-banner";
import Bio from "../components/sections/bio";
import Footer from "../components/sections/footer";
import Projects from "../components/sections/projects";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Bio />
      <Projects />
      <Footer />
    </>
  );
}
