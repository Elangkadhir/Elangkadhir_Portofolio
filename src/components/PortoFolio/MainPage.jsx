import React from "react";
import profile from "../../assets/KevinRushProfile.jpg";
import { motion } from "framer-motion";
import resume from "../../../src/assets/PDF/Elangkadhir.pdf";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { AiOutlineFilePdf } from "react-icons/ai";

function MainPage() {
  const Button = ({ children, onClick }) => (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#1f2937", color: "#fff" }} // Smooth hover effect
      whileTap={{ scale: 0.95 }} // Subtle press effect
      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-md shadow-md mt-10 transition-all duration-300"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Elangkadhir_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = () => {
    window.open(
      "https://web.whatsapp.com/send?phone=8523974852&text=Hello%20there!%20I'm%20interested%20in%20your%20work.",
      "_blank"
    );
  };

  const handleClick2 = () => {
    window.location.href =
      "mailto:your@email.com?subject=Inquiry&body=Hello,%20I'm%20interested%20in%20your%20work.";
  };

  return (
    <section className="container mx-auto text-white flex gap-4 h-screen items-center justify-between px-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-2 w-[60%]"
      >
        <motion.div
          className="text-6xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text h-20 text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hi There!
        </motion.div>
        <motion.div
          className="text-5xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text h-20 text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm Elangkadhir
        </motion.div>
        <motion.div
          className="text-2xl tracking-widest"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          A Passionate <span>Front End Developer</span> who loves to Code,
          Develope, and Design.
        </motion.div>
        <motion.div
          className="flex gap-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button onClick={handleClick}>
            <span className="flex gap-2 items-center">
              <span>Message Me </span>
              <RiWhatsappFill className=" h-8 w-8" />
            </span>
          </Button>
          <Button onClick={handleClick2}>
            {" "}
            <span className="flex gap-2 items-center">
              <span>Mail Me </span>
              <IoMdMail className=" h-8 w-8" />
            </span>
          </Button>
          <Button onClick={handleDownload}>
            <span className="flex gap-2 items-center">
              <span>Get My Resume</span>
              <AiOutlineFilePdf className=" h-8 w-8" />
            </span>
          </Button>
        </motion.div>
      </motion.div>
      <motion.img
        src={profile}
        alt="Elangkadhir"
        className="rounded-md h-[200px] shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      />
    </section>
  );
}

export default MainPage;
