import React from "react";
import { First, Second } from "../assets";
import "../assets/Css/fonts.css"
const PatentData = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full">
                {/* First Patent */}
                <div className="relative bg-white py-6 px-11 rounded-lg w-full my-4 shadow-xl">
                <div className="text-white flex items-center absolute rounded-full py-2 px-2 left-4 md:-top-10 -top-6">
                        <img
                            className='w-[4rem] md:w-[5.4rem] h-[4rem] md:h-[5.4rem] object-contain rounded-full '
                            src={First}
                            alt="Image Description"
                        />
                    </div>
                    <div className="mt-8">
                        <p className="text-xl font-semibold my-2 PatentHeadlines md:pt-4">
                            Multi-featured Laptop Cooling Pad
                        </p>
                        <p className="text-gray-800 text-sm mt-4 para-text uppercase tracking-[3px]">
                            Patent Number: 202311008211
                        </p>
                        <div className="mt-4 para-text text-lg">

                            This innovative cooling pad features built-in fans, integrated speakers, and a heat
                            sensor for enhanced laptop performance. Users can manually control the fans, and
                            its expandable design accommodates larger laptops
                        </div>
                    </div>
                </div>

                {/* Second Patent */}
                <div className="relative bg-white py-6 px-11 rounded-lg w-full my-4 shadow-xl">
                    <div className="text-white flex items-center absolute rounded-full py-2 px-2 left-4 md:-top-10 -top-6">
                        <img
                            className='w-[4.4rem] md:w-[5.4rem] h-[4.4rem] md:h-[5.4rem] object-contain rounded-full '
                            src={Second}
                            alt="Image Description"
                        />
                    </div>
                    <div className="mt-8">
                        <p className="text-xl font-semibold my-2 PatentHeadlines md:pt-4">
                            Multi-functional Pen with Marker
                        </p>
                        <p className="text-gray-800 text-sm mt-4 para-text uppercase tracking-[3px]">
                            Patent Number: 202211067505
                        </p>
                        <div className="mt-4 para-text text-lg">

                            A versatile pen combining marker, ball-point, and eraser functions. It
                            writes on various surfaces, erases easily, and provides seamless function
                            switching.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatentData;
