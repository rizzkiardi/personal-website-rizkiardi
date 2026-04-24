import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { darkMode } from "@/hooks/darkMode";

const ProjectCard = ({
  img,
  nameProjects,
  description,
  techStack,
  linkGithub,
  livePreview,
}) => {
  const isDark = darkMode();

  const swiperRef = useRef(null);
  const hoverTimerRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const handleOpenModal = (src) => {
    setCurrentImg(src);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImg("");
  };

  const handleMouseEnter = () => {
    hoverTimerRef.current = setTimeout(() => {
      swiperRef.current?.autoplay.start();
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimerRef.current);
    swiperRef.current?.autoplay.stop();
  };

  return (
    <div
      className="rounded-md space-y-4 my-4 text-[#191919] bg-transparent dark:text-[#e4e4e4]/80 dark:bg-[#191919] shadow-md overflow-hidden"
      onMouseLeave={handleMouseLeave}
    >
      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay.stop();
        }}
        modules={[Autoplay, Pagination]}
        loop={img.length > 1}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-52"
      >
        {img.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`${nameProjects} screenshot ${index + 1}`}
              className="object-cover w-full h-full rounded-lg"
              loading="lazy"
              onClick={() => handleOpenModal(src)}
              onMouseEnter={handleMouseEnter}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="backdrop"
            onClick={handleCloseModal}
            className="fixed inset-0 bg-[#191919]/85 flex items-center justify-center z-50 !m-0 !p-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-6xl h-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImg}
                alt="Full"
                className="w-full h-full rounded-lg shadow-lg"
              />

              {/* Button Close */}
              <button
                onClick={handleCloseModal}
                className="absolute flex items-center -top-8 right-0 border text-white px-2 py-0 lg:px-3 rounded-sm transition cursor-pointer"
              >
                <img className="w-5 lg:w-6" src={assets.cross_orange} alt="" />
                <span className="mr-2 text-sm">Close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="px-5 dark:px-0">
        {/* Nama & Deskripsi */}
        <div className="">
          <h3 className="text-xl font-bold text-[#191919]/85 dark:text-white">
            {nameProjects}
          </h3>
          <p className="text-sm text-[#191919]/85 dark:text-[#e4e4e4]/80 mt-1 mb-5">
            {description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 dark:bg-gray-500 text-gray-800 dark:text-white px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between my-4">
          {/* Link Github */}
          <div>
            <a
              href={linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#191919] dark:text-[#e4e4e4]/80 text-xs w-[120px] flex gap-2 items-center border border-[#e4e4e4]/80 rounded-sm py-1 px-3"
            >
              <img
                src={isDark ? assets.github_light : assets.github_dark}
                alt="GitHub"
                width="20"
              />
              View Code
            </a>
          </div>

          {/* Link Livepreview */}
          <div>
            <a
              href={livePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#191919] dark:text-[#e4e4e4]/80 text-xs w-[120px] flex gap-2 items-center border border-[#e4e4e4]/80 rounded-sm py-1 px-3"
            >
              <img
                src={isDark ? assets.eye_light : assets.eye_dark}
                alt="Icon eye"
                width="20"
              />
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
