import React from 'react'
import { styles } from '../style'
import InternshipsData from './InternshipsData'
import CertificationData from './CertificationData'
import AchievementData from './AchievementData'

const Achievements = () => {
  return (
    <div className=" w-full p-6  rounded-lg md:flex-row md:p-12">
      
    <div className="w-full md:flex  pt-2 md:pt-[5rem]">
      <div className="w-full md:w-1/2">
        <h1
          className={`text-[16px] mb-4 font-semibold uppercase ${styles.logoFlex}`}
        >
         Achievement Showcase
        </h1>
        <div className="textWrap w-[80%] ">
          <h1 className="text-[2rem] font-semibold workFlexed md:text-3xl lg:text-5xl xl:text-[3rem] text-[#00004B] mb-9 md:mb-15 tracking-wide lg:leading-[4rem] xl:leading-[4.2rem] md:leading-[3rem]">
          Exploring Achievements and Expertise
          </h1>
        </div>
      </div>
      <div className=" flex md:w-1/2 w-full  items-center  md:text-[20px] text-[14px] font-semibold text-[#52526C] ">
        <p className="float-right ml-0 md:ml-7">
        Credential Journey Unveiled: Featuring Outstanding Achievements
        </p>
      </div>
    </div>
<div>
  <AchievementData/>
</div>
    
  </div>
  )
}

export default Achievements
