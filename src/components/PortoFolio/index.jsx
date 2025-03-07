import React from "react";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import ProjectsList from "./ProjectsList";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

function Portofolio() {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-br bg-black">
        <div className="h-full w-full items-center"></div>
        <Navbar />
        <MainPage />
        <AboutMe />
        <ProjectsList />
        <ContactMe />
      </div>
    </>
  );
}

export default Portofolio;
