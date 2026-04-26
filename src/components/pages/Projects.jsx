import { projects } from "@/assets/assets";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <div className="font-GeneralSans-Regular">
      <header>
        <Navbar />
      </header>

      {/* start project */}
      <section className="projects" id="projects">
        {/* shadow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 rounded-full bg-gradient-to-b from-white/30 to-transparent blur-3xl"></div>
        <div className="container max-w-6xl mx-auto">
          <h1
            className="text-start text-3xl max-lg:text-2xl font-semibold mt-[100px] mb-[10px] max-lg:px-6 text-[#191919]/85 dark:text-[#e4e4e4]/80"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            My
            <span className="underline decoration-2 decoration-[#F6A32D] ml-2">
              Projects
            </span>
          </h1>
          <div
            className="grid grid-cols-1 md:grid-cols-2 md:gap-7 lg:grid-cols-2 lg:gap-10 xl:grid-cols-6 xl:grid-rows-4 xl:gap-7 2xl:grid-cols-6 gap-16 max-lg:px-6 xl:auto-rows-fr"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`
                  h-full flex
                ${index === 0 ? "xl:col-span-3 xl:row-span-2" : ""}
                ${index === 1 ? "xl:col-span-3 xl:row-span-2 xl:col-start-4" : ""}
                ${index === 2 ? "xl:col-span-2 xl:row-span-2 xl:row-start-3" : ""}
                ${index === 3 ? "xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-3" : ""}
                ${index === 4 ? "xl:col-span-2 xl:row-span-2 xl:col-start-5 xl:row-start-3" : ""}
              `}
              >
                <ProjectCard {...project} className="h-full w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end projects */}

      <Footer />
    </div>
  );
};

export default Projects;
