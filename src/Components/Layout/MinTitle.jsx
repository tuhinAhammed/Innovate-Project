import React from 'react'

const MinTitle = ({text , className}) => {
  return (
    <h1 className={`text-[16px] md:text-[18px]  text-[#645E76] ${className}`} >{text}</h1>
  )
}

export default MinTitle