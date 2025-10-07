import About from "./aboutSkill/about";
import Education from "./educations/education";
import Hero from "./components/hero";
import Services from "./services/Services";
import ContactUs from "./contectToMail/ContactUs";
import ProjectsGrid from "./projects/ProjectsGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Services />
      <ProjectsGrid showAllByDefault={false} />
      <ContactUs />
      
    </>
  );
}
