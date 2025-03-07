import React from "react";
import { motion } from "framer-motion";
import idea from "../../assets/svg/idea.svg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

function AboutMe() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-400 text-[100px]" />, delay: 0 },
    { icon: <FaCss3Alt className="text-blue-400 text-[100px]" />, delay: 0 },
    {
      icon: <IoLogoJavascript className="text-yellow-300 text-[100px]" />,
      delay: 0.4,
    },
    { icon: <FaReact className="text-blue-400 text-[100px]" />, delay: 0 },
    {
      icon: <RiTailwindCssFill className="text-blue-400 text-[100px]" />,
      delay: 0,
    },
  ];
  return (
    <section className="h-screen container mx-auto flex flex-col">
      <motion.div
        className="text-center text-4xl gap-2 flex justify-center items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
          whileHover={{ scale: 1.5 }}
        >
          <img src={idea} alt="idea" className="h-10 w-10" />
        </motion.div>
        <span className="px-4 text-center bg-white text-black rounded-r-3xl">
          About Me
        </span>
      </motion.div>
      <motion.div
        className="text-2xl text-justify text-white mx-auto w-full mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Passionate React developer skilled in react-router-dom, Ant Design, and
        Tailwind CSS. Experienced in handling dynamic forms, time formatting
        with dayjs, and state management. Currently working with Expo and
        integrating seamless UI interactions. Also a poet at heart—bringing
        creativity to both code and words.
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
    </section>
  );
}

export default AboutMe;
