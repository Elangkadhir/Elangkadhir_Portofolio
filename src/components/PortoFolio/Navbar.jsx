import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../assets/projects/letter-e.png";
import resume from "../../../src/assets/PDF/Elangkadhir.pdf";

const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Elangkadhir_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 w-full z-50 h-[80px] flex items-center justify-between py-1 font-bold transition-transform duration-300 bg-transparent backdrop-blur-3xl group-[.scrolled]:bg-gray-900/80">
      <div className="m-8 flex flex-shrink-0 items-center text-blue-400 ">
        <img src={logo} alt="logo" className="w-10 h-10" />
      </div>
      <div className="flex gap-2 justify-between text-blue-500">
        <span className="p-2  rounded-md hover:bg-white hover:text-black    cursor-pointer">
          Projects
        </span>

        <span className="p-2  rounded-md hover:bg-white hover:text-black   cursor-pointer">
          About Me
        </span>
        <span className="p-2  rounded-md hover:bg-white hover:text-black   cursor-pointer">
          Contact Me
        </span>
        <span
          onClick={handleDownload}
          className="p-2  rounded-md hover:bg-white hover:text-black   cursor-pointer"
        >
          Get My Resume
        </span>
      </div>
      <div className="m-8 flex items-center justify-center py-6 gap-2 text-xl text-white">
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
