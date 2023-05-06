import { Footer, Navbar } from "../components";
import {
  Projects,
  Skills,
  Contact,
  Hero,
  Mockups,
} from "../sections";

const Page = () => (
  <div className="bg-black text-white overflow-hidden">
    <Navbar />
    <Hero />
    <Projects />
    <Mockups />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

export default Page;
