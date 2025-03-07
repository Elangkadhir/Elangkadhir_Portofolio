import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Experience() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-400 text-[100px]" />, delay: 0 },
    { icon: <FaCss3Alt className="text-blue-400 text-[100px]" />, delay: 0.2 },
    {
      icon: <IoLogoJavascript className="text-yellow-300 text-[100px]" />,
      delay: 0.4,
    },
    { icon: <FaReact className="text-blue-400 text-[100px]" />, delay: 0.6 },
    {
      icon: <RiTailwindCssFill className="text-blue-400 text-[100px]" />,
      delay: 0.8,
    },
  ];
  return (
    <section className="container mx-auto text-white my-10">
      <motion.div
        className="text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="p-2 rounded-md bg-white text-black">Experience</span>
      </motion.div>

      <div className="flex container mx-auto w-[80%] gap-2 justify-between items-center my-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: skill.delay }}
            whileHover={{ scale: 1.1 }}
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex container mx-auto w-[80%] gap-2 justify-between items-center my-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        amet cupiditate impedit eligendi velit doloribus. Consequuntur corrupti
        expedita obcaecati, praesentium eaque officia id eius dolores fugit a
        aut magnam architecto.
      </motion.div>
    </section>
  );
}

export default Experience;
