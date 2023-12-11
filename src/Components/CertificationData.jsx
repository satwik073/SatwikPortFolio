import React, { useState } from "react";
import { cerCyber, cerGLBLck, cerGLpython, cerGoogle, cerSpring, cercodepython, cercodingcpp, cermic } from "../assets";
import "../assets/Css/fonts.css";

const CertificationData = () => {
  const certificateImages = [
    { imageSrc: cerGoogle, title: "Google Data Analytics Professional Certificate", issueDate: "August 2023" },
    { imageSrc: cermic, title: "Natural Language Processing in Microsoft Azure", issueDate: "September 2023" },
    { imageSrc: cerGLBLck, title: "Great Learning Blockchain Basics", issueDate: "August 2023" },
    { imageSrc: cerGLpython, title: "Great Learning Python for Machine Learning", issueDate: "August 2023" },
    { imageSrc: cerCyber, title: "Introduction to Cybersecurity", issueDate: "May 2022" },
    { imageSrc: cercodepython, title: "Introduction to Python - Chitkara University, 2021", issueDate: "January 2022" },
    { imageSrc: cercodingcpp, title: "Introduction to C++ for Chitkara University Completion Certificate", issueDate: "February 2022" },
    { imageSrc: cerSpring, title: "Explore Machine Learning Using Python", issueDate: "Aug 2023" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex justify-center items-center p-0 mb-5">
      <div className="grid sm:grid-cols-2 grid-cols-1 p-0 lg:grid-cols-2 mt-4 gap-16 w-[90%]">
        {certificateImages.map((certificate, index) => (
          <div>
          <div key={index} className="relative box mt-6">
            <img
              className="w-full h-auto cursor-pointer"
              src={certificate.imageSrc}
              alt={`Certificate ${index + 1}`}
              onClick={() => openModal(certificate.imageSrc)}
            />
            <div className={`modal-overlay ${selectedImage ? "block" : "hidden"}`} onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage} alt={`Certificate ${index + 1}`} />
              </div>
            </div>
          
          </div>
          <p className="font-semibold justify-center flex mt-4 ExpenTile text-xl hover:text-indigo-200 text-[#000248]">{certificate.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationData;
