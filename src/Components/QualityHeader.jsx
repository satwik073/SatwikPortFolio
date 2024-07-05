import React from "react";
import { qualities } from "../Constants";
import "../assets/Css/fonts.css";
const QualityHeader = () => {
  return (
    <div className="w-full bg-[#000113] p-[2rem]">
      <div className="relative flex items-center justify-center work-item">
      
        <div className="relative flex flex-col items-center justify-between w-full m-5 quality-container md:text-center md:flex-row">
          {qualities.map((quality) => (
            <div
              key={quality.id}
              className="relative w-full pb-8 mb-4 text-center md:mb-4 md:mr-4 md:w-1/4"
            >
              <h1 className="mb-2 text-2xl font-bold">{quality.id}</h1>
              <h2 className="mb-1 text-xl font-semibold">{quality.title}</h2>
              <p className="text-lg font-semibold">{quality.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityHeader;
