import { assets } from "@/assets/assets";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import HamburgerMenu from "./HamburgerMenu";
import { darkMode } from "@/hooks/darkMode";

const Navbar = () => {
  const isDark = darkMode();
  // Preloader
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Preloader

  // side menu
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="font-GeneralSans-Regular fixed top-0 left-0 right-0 z-50 px-6 py-4 text-[#191919] dark:text-[#e4e4e4]/80">
      <div
        className={`font-GeneralSans-Regular fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          scrolled ? "backdrop-blur bg-white/5 shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="container max-w-6xl mx-auto flex items-center">
          <div>
            <NavLink to="/" className="flex gap-1 ">
              <img
                src={isDark ? assets.logo_light : assets.logo_dark}
                alt="Logo rizkiardi"
                width="30"
              />
              rizkiardi
            </NavLink>
          </div>
          <ul className="hidden md:flex md:flex-end justify-end gap-5 ml-auto">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative text-[#191919] dark:text-[#e4e4e4]/80 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left 
                  ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0"
                  } after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative text-[#191919] dark:text-[#e4e4e4]/80 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left 
                  ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0"
                  } after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `relative text-[#191919] dark:text-[#e4e4e4]/80 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left 
                  ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0"
                  } after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `relative text-[#191919] dark:text-[#e4e4e4]/80 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left 
                  ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0"
                  } after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <a
                href="/Resume - Rizki Septi Ardi.pdf"
                download
                className="relative flex text-[#191919] dark:text-[#e4e4e4]/80 after:content-[''] after:absolute after:left-[3px] after:bottom-[3px] after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                <img
                  src={isDark ? assets.download_light : assets.download_dark}
                  alt="Icon Download"
                />
                Resume
              </a>
            </li>
            <li>
              <AnimatedThemeToggler />
            </li>
          </ul>

          <div className="flex items-center flex-rows gap-5 max-md:ml-auto">
            <div className="md:hidden">
              <AnimatedThemeToggler className="flex items-center" />
            </div>
            <button
              className="block md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </button>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      <nav>
        <ul
          className={`flex flex-col gap-3 md:hidden py-10 px-4 fixed top-0 left-0 w-full h-screen bg-[#e4e4e4] dark:bg-[#191919] z-40 transform transition-transform duration-500 
            ${isOpen ? "translate-y-14" : "-translate-y-full"}`}
        >
          <li>
            <Link
              to="/"
              className="block hover:text-[#191919] hover:bg-[#191919]/10 dark:hover:bg-white/6 dark:hover:text-[#FFFFFF] hover:rounded-sm py-2 px-2"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-[#191919] hover:bg-[#191919]/10 dark:hover:bg-white/6 dark:hover:text-[#FFFFFF] hover:rounded-sm py-2 px-2"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block hover:text-[#191919] hover:bg-[#191919]/10 dark:hover:bg-white/6 dark:hover:text-[#FFFFFF] hover:rounded-sm py-2 px-2"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:text-[#191919] hover:bg-[#191919]/10 dark:hover:bg-white/6 dark:hover:text-[#FFFFFF] hover:rounded-sm py-2 px-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li className="hover:text-[#191919] hover:bg-[#191919]/10 dark:hover:bg-white/6 dark:hover:text-[#FFFFFF] hover:rounded-sm py-2 px-2">
            <a
              href="/Resume - Rizki Septi Ardi.pdf"
              download
              className="flex"
              onClick={closeMenu}
            >
              <img
                src={isDark ? assets.download_light : assets.download_dark}
                alt="Icon Download"
              />
              Resume
            </a>
          </li>
          {/* <li className="flex items-center hover:text-[#191919] hover:bg-[#191919]/10 dark:hover:bg-white/6 dark:hover:text-[#FFFFFF] hover:rounded-sm py-2 px-2">
            <AnimatedThemeToggler />
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
