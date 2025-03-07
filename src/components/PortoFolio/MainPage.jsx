import React from "react";
import profile from "../../assets/KevinRushProfile.jpg";
import { motion } from "framer-motion";

function MainPage() {
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
          Hi!
        </motion.div>
        <motion.div
          className="text-5xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text h-20 text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Elangkadhir
        </motion.div>
        <motion.div
          className="text-2xl tracking-widest"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I'm a <span>Front End Developer</span>
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
