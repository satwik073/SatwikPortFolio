import React from "react";
import { AboutSEC } from "./Contentdata";
import "../assets/Css/fonts.css";
import { styles } from "../style";
const About = () => {
  return (
    <div className="flex flex-col bgFlexed shadow-none p-6 bg-white rounded-lg md:flex-row md:p-12">
      <div class="area z-0 " ><ul class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li></ul>
      </div >
      <div className="container md:flex-row">
        <div className="w-full md:flex">
          <div className="head-about md:w-[80%] w-[100%] md:flex">
            <div className="w-full p-2 flexstyle">
              <h1 className={`text-[16px] mb-4 font-semibold uppercase text-[#00004B] ${styles.logoFlex} `}>
                Welcome to My Portfolio
              </h1>
              <div className="textWrap w-[80%]">
                <p className="text-[2rem] font-semibold font-poppins aboutinationFlex md:text-3xl lg:leading-[4rem] lg:text-5xl xl:text-[3rem] xl:leading-[4.2rem] md:leading-[3rem] text-[#00004B]  mb-9 md:mb-15 tracking-wide">
                  A Developer <br />
                  Delivering Success by
                  Winning Hearts
                </p>
              </div>

            </div>
          </div>
        </div>
        <div class="w-[95vw] mt-0 p-3 md:flex main-box">
          <div class="mission md:mr-16  md:w-1/2 ml-0 m-[1rem]">
            <h1 class={`text-[16px] mb-4 font-semibold uppercase ${styles.logoFlexRemastered}`}>My Mission</h1>
            <p className="xl:text-xl font-extralight  lg:text-lg text-[1rem] para-text w-full">
              {AboutSEC.content}
            </p>
          </div>
          <div class="mission md:w-1/2 md:ml-5 ml-0 m-[1rem]">
            <h1 class={`text-[16px] mb-4 font-semibold uppercase ${styles.logoFlexRemastered}`}>My Goals</h1>
            <p class="xl:text-xl font-extralight lg:text-lg text-[1rem] para-text w-full">
              {AboutSEC.AimBoxFixed}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
