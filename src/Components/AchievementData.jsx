import React, { useState } from "react";
import "../assets/Css/fonts.css";
import { image1, image2, image3, image4 } from "../assets"; // Replace these imports with your actual image paths

const AchievementData = () => {
  const achievementData = [
    { title: "Hack-On With Amazon - Season 3", image: image1 },
    { title: "Tata Imagination Challenge 2023", image: image2 },
    { title: "Accenture Innovation Challenge 2023", image: image3 },
    { title: "TVS Credit E.P.I.C 5.0", image: image4 },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-11 w-[90%]">
        {achievementData.map((achievement, index) => (
          <div>
          <div key={index} className="relative box">
            <div
              className="w-full h-auto cursor-pointer border-2 border-transparent"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
            >
              <img src={achievement.image} alt={`Achievement ${index + 1}`} className="w-full h-auto" />   
            </div>
            
          </div>
          <p className="font-semibold justify-center flex mt-4 ExpenTile text-xl hover:text-indigo-200 text-[#000248]">{achievement.title}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AchievementData;
