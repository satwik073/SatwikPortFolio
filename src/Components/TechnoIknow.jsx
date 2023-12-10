import React from 'react'
import { technologyIconsFixed } from '../Constants'
const TechnoIknow = () => {
  return (
    <div>
       <div className=' grid items-center filter-shadow justify-center grid-cols-6 mx-auto md:w-[100%] w-full md:grid-cols-12 gridContainers'>
        {technologyIconsFixed.map((element, index) => (
          <img key={element.id} src={element.iconFlex} className='w-[3rem] md:w-[6rem] mx-auto mb-5 p-1  md:p-2'   alt="" />
        ))}
      </div>
    </div>
  )
}

export default TechnoIknow
