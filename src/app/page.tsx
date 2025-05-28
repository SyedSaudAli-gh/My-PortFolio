import Assignments from "./components/Assignments";
import About from "./components/about";
import ContactUs from "./components/contact-us";
import Education from "./components/education";
import Hero from "./components/hero";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Services />
      <Assignments />
      <ContactUs />
    </>
  );
}
