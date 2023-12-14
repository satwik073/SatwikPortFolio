import React, { useState } from "react";
import { IoTImage, First, Swipe } from "../assets";
import "../assets/Css/fonts.css";
import Contact from "./Contact";
import { styles } from "../style";


const ResearchData = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const additionalContent = (
        <div>
            <p className="text-gray-800 text-sm mt-6 para-text uppercase tracking-[3px]"></p>
            <div className="mt-6 para-text text-lg leading-[2rem]">
                {/* Add more content here */}
                The purpose of this research paper is to analyze the applications of IoT (internet of things) and Blockchain in the
                digital revolution of healthcare unit. The report begins with recognizing traditional healthcare systems’ inadequacies,
                such as inefficiencies in data supervision, interoperability challenges, and security concerns, further it offers a
                comprehensive evaluation of the architecture and mechanics of IoT and Blockchain technologies, which can be a
                promising step towards the transformation of healthcare. Blockchain can provide a secure and fragmented platform
                for data gathering, exchange and sharing. On the other hand, IoT facilitates authentic monitoring and collection of
                data. These innovations when integrated together can make an Influence on the real-time data gathering, higher data
                security and privacy, Moreover, the paper highlights the challenges that hinder the widespread adoption of blockchain
                and IoT in healthcare. These challenges include regulatory hurdles, technical complexities, productions and ethical
                concerns regarding confidentiality and consent. The paper analyzes these challenges in detail and proposes possible
                solutions to overcome them
            </div>
        </div>
    );

    return (
        <div className="flex justify-center items-center">
            <div className="bg-white rounded-lg relative py-6 px-11 w-full my-4">
                <div className="mt-8">
                    <p className="md:text-3xl space-x-4 text-2xl flex font-semibold my-2 ResearchHeadlines md:pt-4">
                        <div>
                            <img
                                className='w-[4rem] md:w-[5.4rem] h-[4rem] md:h-[5.4rem] object-contain rounded-full'
                                src={Swipe}
                                alt="Blockchain Image"
                            />
                        </div>
                        <div className="items-center flex">
                            Blockchain and IoT for Effective Data Management
                        </div>
                    </p>
                    <p className="text-gray-800 text-sm mt-6 para-text uppercase tracking-[3px] ">
                        Topic: Improving Healthcare with Technology
                    </p>
                    <div className="mt-6 para-text text-lg leading-[2rem]">
                        {/* Displaying content based on showMore state */}
                        {showMore ? (
                            <>
                                {/* Display additional content */}
                                {additionalContent}
                                {/* 'Read Less' button */}
                                <div className="text-right">
                                    <button
                                        onClick={toggleShowMore}
                                        className={` text-[#000248] py-2 font-serif text-sm px-4 hover:bg-[#000248] hover:text-white border-2 border-[#000248] read `}
                                    >
                                        Read Less
                                    </button>
                                </div>
                            </>
                        ) : (
                            // Displaying shortened content
                            <>
                                {/* Shortened content */}
                                The purpose of this research paper is to analyze the applications of IoT (internet of things) and Blockchain in the
                                digital revolution of healthcare unit. The report begins with recognizing traditional healthcare systems’ inadequacies.....
                                {/* 'Read More' button */}
                                <div className="text-right">
                                    <button
                                        onClick={toggleShowMore}
                                        className={` text-[#000248] py-2 font-serif text-sm px-4 hover:bg-[#000248] hover:text-white border-2 border-[#000248] read `}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchData;
