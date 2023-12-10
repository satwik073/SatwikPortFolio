import React from "react";
import Navbar from "./Components/Navbar";
import MainHeader from "./Components/MainHeader";
import AboutSection from "./Components/AboutSection";
import "@fortawesome/fontawesome-free/css/all.css";
import QualityHeader from "./Components/QualityHeader";
import WorkExperience from "./Components/WorkExperience";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import Patents from "./Components/Patents";
import ResearchesContained from "./Components/ResearchesContained";
import InternshipsData from "./Components/InternshipsData";
const AlterMessage = () => {
  return (
    <div className="App overflow-hidden absolute w-full bg-gradient-to-tr from-purple-200 via-purple-100 via-pink-100 to-[#fffb0086]">
      
      <div className="nav-attached m-[1.5rem]">
        <Navbar className="fixed m-[1.5rem]" />
      </div>
      <div className="relative hero-section mt-[12rem] m-[2.5rem]">
        <MainHeader />
      </div>
      <div className="bg-[#000]  intern text-[#fff] mt-[0rem]   w-full">
        <QualityHeader />
      </div>
      <div className="w-full bg-gradient-to-b from-[#ffedb7]  via-[#ede4ff] to-[#b4b4ff]">
        <AboutSection />
      </div>
      <div className="w-full bg-[rgb(255,255,255)] ">
        <WorkExperience/>
      </div>
      <div className="w-full bg-[rgb(255,255,255)] ">
        <Projects/>
      </div>
      <div className="w-full bg-[rgb(255,255,255)] ">
        <Certifications/>
      </div>
      <div className="w-full bg-transparent">
        <InternshipsData/>
      </div>
      <div className="w-full bg-[rgb(255,255,255)] ">
        <Patents/>
      </div>
      <div className="w-full bg-[rgb(255,255,255)] ">
        <ResearchesContained/>
      </div>
      
    </div>
  );
};

export default AlterMessage;
