import React from 'react';
import { technologyIconsFixed } from '../Constants';
import { styles } from '../style';
import "../assets/Css/fonts.css";
import InternshipsData from './InternshipsData';
import PatentData from './PatentData';
const Patents = () => {
  return (
    <div className=" w-full p-6  rounded-lg md:flex-row md:p-12">
      <div className="w-full md:flex  pt-2 md:pt-[5rem]">
        <div className="w-full md:w-1/2">
          <h1
            className={`text-[16px] mb-4 font-semibold uppercase ${styles.logoFlex}`}
          >
            Patents secured
          </h1>
          <div className="textWrap w-[80%] ">
            <h1 className="text-[2rem] font-semibold workFlexed md:text-3xl lg:text-5xl xl:text-[3rem] text-[#00004B] mb-9 md:mb-15 tracking-wide lg:leading-[4rem] xl:leading-[4.2rem] md:leading-[3rem]">
              Inventing The Future
            </h1>
          </div>
        </div>
        <div className=" flex md:w-1/2 w-full  items-center  md:text-[20px] text-[14px] font-semibold text-[#52526C] ">
          <p className="float-right ml-0 md:ml-7">
            Embarking on My Career Journey: Unlocking Outstanding Features
          </p>
        </div>
      </div>
     <div className='mt-6'>
      <PatentData/>
     </div>
      
    </div>
  );
}

export default Patents;
