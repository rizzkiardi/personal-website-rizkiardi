import { assets, projects, technology } from "@/assets/assets";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Marquee } from "../magicui/marquee";
import { ShimmerButton } from "../magicui/shimmer-button";
import PixelSnow from "../PixelSnow";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import ProjectCard from "../ui/ProjectCard";

const Home = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const observer = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    observer();
    const mo = new MutationObserver(observer);
    mo.observe(document.documentElement, { attributes: true });
    return () => mo.disconnect();
  }, []);

  // Marque
  const half = Math.ceil(technology.length);
  const firstRow = technology.slice(0, half);

  const TechnologyCard = ({ img, name }) => {
    return (
      <section
        className={cn(
          "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl px-3 max-sm:gap-[1px]",
        )}
      >
        <div className="flex flex-col  py-2 px-2 items-center gap-2 max-sm:space-x-[5px]">
          <img className="" width="75" alt={name} src={img} />
          <p className="text-sm font-medium text-[#191919] dark:text-[#e4e4e4]/80">
            {name}
          </p>
        </div>
      </section>
    );
  };
  // Marque

  return (
    <div className="font-GeneralSans-Regular">
      <header className="container max-w-6xl mx-auto my-3">
        <Navbar></Navbar>
      </header>

      {/* shadow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 rounded-full bg-gradient-to-b from-white/10 to-transparent blur-3xl"></div>

      <div className="absolute inset-0 -z-10">
        <PixelSnow
          color={isDark ? "#fafafa" : "#fafafa"}
          flakeSize={0.05}
          minFlakeSize={1.25}
          pixelResolution={500}
          speed={0.1}
          density={0.1}
          direction={125}
          brightness={isDark ? 0.1 : 5}
          depthFade={3}
          farPlane={10}
          gamma={0.5}
          variant="square"
        />
      </div>
      <div className="hero relative container min-h-screen max-w-6xl mx-auto flex max-md:flex-col md:flex-row-reverse items-center justify-center text-[#e4e4e4]/80 pb-10 pt-5">
        <div className="w-[40%] max-md:w-full md:mb-20 ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <img
              src={assets.rizkiardi_hero}
              className="rounded-full max-md:mt-[25px] mb-[5px] mx-auto max-md:w-[300px]"
              alt="Picture rizkiardi"
              width="750"
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-center my-3 md:text-md lg:text-lg text-[#191919] dark:text-[#e4e4e4]/80"
          >
            <AnimatedShinyText className="flex gap-2 justify-center items-center">
              <img src={assets.dev} alt="Icon Developer" />
              Rizki Ardi | Web Developer
            </AnimatedShinyText>
          </motion.p>
        </div>

        <div className="w-[60%] max-md:w-full max-lg:px-6 md:pt-5">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="my-5 text-4xl text-center  md:text-start"
          >
            <span className="sr-only">
              Designing and Developing Scalable, High-Quality Web Applications
            </span>

            <span
              aria-hidden="true"
              className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 text-3xl md:text-4xl lg:mb-5 lg:text-5xl xl:text-6xl dark:from-[#FFFFFF]/90 dark:to-gray-500"
            >
              Designing and Developing Scalable,
            </span>

            <span
              aria-hidden="true"
              className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:from-[#FFFFFF]/90 dark:to-gray-500"
            >
              High-Quality Web Applications
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 mb-10 text-sm text-center md:text-start my-3 md:text-md lg:text-lg text-[#191919] dark:text-[#e4e4e4]/80 max-md:mb-10 lg:my-10"
          >
            Transforming code into scalable web applications using React,
            Next.js, and AI technologies.
          </motion.p>

          <div className="flex max-md:justify-center md:flex-row items-center md:items-start gap-5 md:gap-7">
            <motion.a
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              href="mailto:rizkiseptiardy@gmail.com"
              target="_blank"
              className="w-[200px] transform transition-transform duration-300 hover:scale-110 max-md:my-5"
            >
              <ShimmerButton className="flex justify-center gap-3 py-3 max-md:py-2 text-[#FFFFFF] dark:text-[#e4e4e4]/80 dark:bg-transparent w-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Hire me
              </ShimmerButton>
            </motion.a>

            <motion.a
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              href="https://www.linkedin.com/in/rizkiardi/"
              target="_blank"
              className="w-[200px] transform transition-transform duration-300 hover:scale-110 max-md:my-5 shadow-lg rounded-lg"
            >
              <span className="flex justify-center py-3 max-md:py-2 text-[#191919] dark:text-[#e4e4e4]/80 border border-slate-500 dark:border-[#e4e4e4]/80 rounded-lg w-full">
                View LinkedIn
              </span>
            </motion.a>
          </div>
        </div>
      </div>
      <main>
        {/* Start Technology Stack*/}
        <section className="relative technology w-full bg-[#ECEEF0] dark:bg-[#2D2D2D]">
          <div className="tech-stack container max-w-6xl mx-auto py-10">
            <h2
              className="text-[#191919] dark:text-white text-2xl font-semibold pt-[30px] pb-[20px] max-lg:px-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <span className="underline decoration-2 decoration-[#F6A32D] mr-2">
                Technology
              </span>
              Stack
            </h2>
            {/* marque */}
            <div className="relative pb-10 flex w-full flex-row items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s]">
                <div className="flex gap-2 md:gap-3">
                  {firstRow.map((technology, index) => (
                    <TechnologyCard
                      key={technology.name + index}
                      {...technology}
                    />
                  ))}
                </div>
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#ECEEF0] dark:from-[#2D2D2D]"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#ECEEF0] dark:from-[#2D2D2D]"></div>
            </div>
            {/* marque */}
          </div>
        </section>
        {/* End Technology Stack*/}

        {/* Start My Projects */}
        <section
          className="projects bg-transparent dark:bg-[#191919]"
          id="projects"
        >
          <div className="container max-w-6xl mx-auto py-10">
            <h2
              className="text-[#191919] dark:text-white text-end text-2xl font-semibold pt-[30px] pb-[20px] max-lg:px-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              My
              <span className="underline decoration-2 decoration-[#F6A32D] ml-2">
                Projects
              </span>
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 md:gap-7 lg:grid-cols-2 lg:gap-10 xl:grid-cols-6 xl:grid-rows-4 xl:gap-7 2xl:grid-cols-6 gap-16 max-lg:px-6"
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
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End My Projects */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
