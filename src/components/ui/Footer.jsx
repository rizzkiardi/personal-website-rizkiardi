import { assets } from "@/assets/assets";
import { darkMode } from "@/hooks/darkMode";
import { Link } from "react-router";

const Footer = () => {
  const isDark = darkMode();

  return (
    <div className="font-GeneralSans-Regular">
      <footer className="text-[#191919] dark:text-[#e4e4e4]/80">
        <div className="relative max-w-6xl mx-auto mt-10 py-3 text-sm border-t border-[#E4E4E4]/80 max-lg:mx-6">
          <div className="flex justify-start items-center my-5 gap-5">
            <div className="border-r-2 border-[#E4E4E4]/80 pr-5">
              <p className="">&copy; Copyright - {new Date().getFullYear()}</p>
              <p>built in Yogyakarta</p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-1 ">
                <img
                  src={isDark ? assets.logo_light : assets.logo_dark}
                  alt="Logo rizkiardi"
                  width="30"
                />
                rizkiardi
              </Link>

              <a href="https://github.com/rizzkiardi" className="flex gap-1">
                <img
                  src={isDark ? assets.github_light : assets.github_dark}
                  alt="Logo Github"
                  width="25"
                />
              </a>

              <a
                href="https://linkedin.com/in/rizkiardi"
                className="flex gap-1  "
              >
                <img
                  src={isDark ? assets.linkedin_light : assets.linkedin_dark}
                  alt="Logo LinkedIn"
                  width="25"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
