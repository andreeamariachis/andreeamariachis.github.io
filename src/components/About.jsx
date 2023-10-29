import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi there! I'm Andreea Chis, and I love making websites and phone apps
        look awesome and easy to use. I also work on the front-end side of
        things, using HTML, CSS, and JavaScript. Right now, I'm focusing on
        improving my ReactJS knowledge. I'm pretty handy with a tool called
        Figma, which helps me turn ideas into cool designs. <br></br> <br></br>
        Currently, I am looking to find a company for my internship semester
        where I can grow, learn and create products that matter!
      </motion.p>

      {/* cards  */}

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

{
  /* <a href="https://www.flaticon.com/free-icons/web-development" title="web development icons">Web development icons created by Muhammad Ali - Flaticon</a> */
}
{
  /* <a href="https://www.flaticon.com/free-icons/web-design" title="web design icons">Web design icons created by nangicon - Flaticon</a> */
}
