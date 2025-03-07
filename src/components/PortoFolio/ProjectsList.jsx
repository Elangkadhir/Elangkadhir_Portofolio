import React from "react";
import profile from "../../assets/about.jpg";
import { motion } from "framer-motion";
import idea from "../../assets/svg/idea.svg";
import { FaLocationArrow, FaLongArrowAltRight } from "react-icons/fa";

function ProjectsList() {
  return (
    <section className="container mx-auto text-white">
      <motion.div
        className="text-center text-4xl gap-2 flex justify-center items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="px-4 text-center bg-white text-black rounded-l-3xl">
          Projects
        </span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
          whileHover={{ scale: 1.5 }}
        >
          <img src={idea} alt="idea" className="h-10 w-10" />
        </motion.div>
      </motion.div>

      <div className="container w-[80%] mx-auto flex flex-col gap-8 justify-between mt-10">
        <motion.div
          className="flex flex-col gap-2 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-24 justify-between bg-white text-black p-10 rounded-md shadow-lg">
            <div>
              <div className="font-bold text-xl mb-2">
                <span className="font-bold text-blue-400">Thirukural</span>
              </div>
              <p className="text-gray-600">
                Thirukural Reader – A React app built out of passion for
                Thirukural, allowing users to explore and read its timeless
                verses seamlessly. Designed for an enriched reading experience
                with a clean and intuitive UI.
              </p>
              <span className="mt-2 font-bold text-gray-500">
                | Vite | Tailwind CSS | 2024 |
              </span>
            </div>
            <motion.img
              src={profile}
              alt="Project"
              className="rounded-md h-[200px] shadow-md"
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="flex gap-24 justify-between bg-white text-black p-10 rounded-md shadow-lg">
            <motion.img
              src={profile}
              alt="Project"
              className="rounded-md h-[200px] shadow-md"
              whileHover={{ scale: 1.05 }}
            />
            <div>
              <div className="font-bold text-xl mb-2">
                <span className="font-bold text-red-400">Doxzon :</span>
              </div>
              <p className="text-gray-600">
                Doxon – Doctor App – A video consultation platform enabling
                doctors to connect with patients seamlessly. Built with React
                and optimized for smooth scheduling, secure video calls, and
                efficient patient management.
              </p>
              <span className="mt-2 font-bold text-gray-500">
                | React | Antd | Tailwind CSS | 2024 |
              </span>
            </div>
          </div>
          <div className="flex gap-24 justify-between bg-white text-black p-10 rounded-md shadow-lg">
            <div>
              <div className="font-bold text-xl mb-2">
                <span className="font-bold text-green-400">Jungle-</span>
                <span className="text-yellow-300">Chips</span> :
              </div>
              <p className="text-gray-600">
                Jungle Chips – A web platform that fetches and displays company
                details using the LinkedIn API. Built with React, it provides
                seamless access to business insights, making company research
                easier and more efficient.
              </p>
              <span className="mt-2 font-bold text-gray-500">
                | React | Antd | Tailwind CSS | 2024 |
              </span>
            </div>
            <motion.img
              src={profile}
              alt="Project"
              className="rounded-md h-[200px] shadow-md"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="text-center cursor-pointer my-10  flex justify-center items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className=" px-4 text-center text-white ">View More</span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
          whileHover={{ scale: 1.5 }}
        >
          <FaLongArrowAltRight className="text-yellow-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ProjectsList;
