import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { avatar } from "../assets";

const Hero = () => {
  return (
    // background image
    <section className="relative w-full h-screen mx-auto">
      {/* dot and line */}
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 mt-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#7f4ced]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello! I'm <span className="text-[#c7619d]">Andreea</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am an UI Designer <br className="sm:block hidden" /> and Front-end
            Developer
          </p>
          <p className={`${styles.resumeText} z-50 md:z-50`}>
            <a
              href="https://drive.google.com/file/d/1rr8B_hSF8D3avCviQ0SK08MAl5j5xhg6/view?usp=sharing"
              target="_blank"
            >
              📑 Resume
            </a>
          </p>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center ">
        <img
          src={avatar}
          alt="avatar"
          className="h-auto max-w-full  absolute  bottom-0"
        />
      </div>
    </section>
  );
};

export default Hero;
