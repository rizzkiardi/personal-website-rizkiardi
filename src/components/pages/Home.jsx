import { assets, projects, technology } from "@/assets/assets";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Marquee } from "../magicui/marquee";
import { Particles } from "../magicui/particles";
import { ShimmerButton } from "../magicui/shimmer-button";
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
          "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl px-3 max-sm:gap-[1px]"
        )}
      >
        <div className="flex flex-col border border-[#e4e4e4]/20 rounded-sm py-2 px-2 items-center gap-2 max-sm:space-x-[5px]">
          <img className="" width="75" alt={name} src={img} />
          <p className="text-sm font-medium text-[#e4e4e4]/80 dark:text-[#e4e4e4]/80">
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

      <Particles
        className="absolute inset-0 -z-10"
        color={isDark ? "#ffffff" : "#191919"}
      />

      <div className="hero relative container max-w-6xl mx-auto flex flex-col items-center justify-center text-[#e4e4e4]/80 ">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          // whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <img
            src={assets.rizkiardi_img}
            className="rounded-full mt-[100px] mb-[5px] lg:w-[250px]"
            alt="Picture rizkiardi"
            width="200"
            loading="lazy"
          />
        </motion.div>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-center my-3 md:text-md lg:text-lg text-[#191919] dark:text-[#e4e4e4]/80"
        >
          Hi, I'm Rizki Ardi | Web Developer
        </motion.p>

        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-5 text-center font-semibold"
        >
          <h1 className="text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:from-[#FFFFFF]/90 dark:to-gray-500">
              Crafting Responsive and
            </span>
          </h1>
          <h1 className="text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400 text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:from-[#FFFFFF]/90 dark:to-gray-500">
              Modern Web Solutions
            </span>
          </h1>
        </motion.div>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="mailto:rizkiseptiardy@gmail.com"
          className="mt-[25px] mb-[100px]"
          target="_blank"
        >
          <ShimmerButton className="flex gap-3 max-md:py-2 py-3 px-10 text-[#FFFFFF] dark:text-[#e4e4e4]/80 dark:bg-transparent">
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
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Hire me
          </ShimmerButton>
        </motion.a>
      </div>

      <main className="">
        {/* Start Technology Stack*/}
        <section className="relative technology w-full bg-[#2D2D2D]">
          <div className="tech-stack container max-w-6xl mx-auto py-10">
            <h2
              className="text-white text-2xl font-semibold pt-[30px] pb-[20px] max-lg:px-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <span className="underline decoration-[#FCCA46] mr-2">
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
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#2d2d2d]"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#2d2d2d]"></div>
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
              <span className="underline decoration-[#FCCA46] ml-2">
                Projects
              </span>
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 md:gap-7 lg:grid-cols-2 lg:gap-10 xl:grid-cols-3 2xl:grid-cols-3 gap-16 max-lg:px-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
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
