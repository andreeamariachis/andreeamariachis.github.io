import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedin } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    // prevent to erase data when reload browser
    e.preventDefault();
    setLoading(true);

    //emailjs data

    // L5UuLFakyk_pG3UOF
    // template_h0mp84c
    // service_sht8zze

    emailjs
      .send(
        "service_sht8zze",
        "template_h0mp84c",
        {
          from_name: form.name,
          to_name: "Andreea Chis",
          from_email: form.email,
          to_email: "andreeamariachis@gmail.com",
          message: form.message,
        },
        "L5UuLFakyk_pG3UOF"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your message! I will get back to you as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div
      className="'xl:mt-12 xl:flex-row
    flex-col-reverse flex gap-10 overflow-hidden "
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Let's Connect!</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <a
            href="https://www.linkedin.com/in/andreea-maria-chis-bab150236/"
            target="_blank"
          >
            <img src={linkedin} className="w-10"></img>
          </a>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
