import React from "react";
import { motion } from "framer-motion";
import idea from "../../assets/svg/idea.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function ContactMe() {
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
          Contact Me
        </span>
      </motion.div>

      <div className="flex gap-8 mt-20 ">
        {/* <div class="space-y-4 w-[60%] bg-white p-2 rounded-md">
          <div>
            <label class="block text-gray-700">Name</label>
            <input
              type="text"
              class="w-full p-2 border border-blue-400 outline-none rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label class="block text-gray-700">Email</label>
            <input
              type="email"
              class="w-full p-2 border border-blue-400 outline-none rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label class="block text-gray-700">Message</label>
            <textarea
              class="w-full p-2 border border-blue-400 outline-none rounded-md"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="w-full bg-green-400 rounded-md p-2 text-xl font-bold text-white">
            Send
          </button>
        </div> */}
        <motion.div
          className="text-2xl text-justify w-[50%] text-white "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Let's Connect! Feel free to reach out for collaborations, project
          discussions, or just to talk about code and poetry. Drop a message,
          and I'll get back to you soon!
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            🚀
          </motion.span>
        </motion.div>
        <div className="flex flex-col justify-center items-center w-[50%] gap-1 text-white">
          <span className="font-bold flex gap-1 items-center">
            <MdOutlineMail className="mr-2" />
            <span> elangkadhirnathan12@gmail.com</span>
          </span>
          <span className="font-bold flex gap-1 items-center">
            <FaPhoneAlt className="mr-2" />
            <span> +91-8523974852</span>
          </span>
          <sapn className="font-bold text-blue-500 mt-4"> Find me in :</sapn>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className=" flex   gap-2 text-xl text-white">
              <FaLinkedin />
              <FaGithub />
              <FaSquareXTwitter />
              <FaInstagram />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
