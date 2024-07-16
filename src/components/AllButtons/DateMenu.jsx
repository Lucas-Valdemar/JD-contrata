import React from 'react'
import Icon from "../../assets/Vector 1.svg"

const DateMenu = ({date}) => {
  return (
    <div className="text-[#686868] text-[10px] border-[#EFEFEF] border-[1px] border-solid rounded-[4px] h-[27px] w-[125px] flex items-center justify-center ">
          <p className='truncate w-[105px] font-[roboto] text-[10px]'>{date}</p><img src={Icon} alt="Icon" className='w-[10px] h-[4px]' />
          
        </div>
  )
}

export default DateMenu