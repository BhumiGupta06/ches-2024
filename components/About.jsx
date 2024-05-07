import AboutCarousel from "./AboutCarousel";
import { getAbout } from "@/sanity/utilsSanity";
const About = async () => {
  const about = await getAbout();

  return (
    <section id="About" className="px-4 md:px-28 pb-4 pt-8 w-full min-h-screen">
      <h1 className="md:text-4xl text-3xl font-bold font-heading text-secondary-200 mt-4 decoration-4  decoration-accent-500 underline underline-offset-8">
        About Us
      </h1>
      <div className="my-8 p-4 md:p-8 bg-gradient-to-tl from-[#451452] to-[#26062d] bg-opacity-30 backdrop-filter mt-6 backdrop-blur-lg rounded-lg shadow-lg">
        <AboutCarousel about={about} />
      </div>
    </section>
  );
};

export default About;
