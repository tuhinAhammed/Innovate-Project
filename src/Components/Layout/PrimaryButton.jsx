import React from 'react'

const PrimaryButton = ({text, className}) => {
  return (
    <button className={`text-lg px-[20px] md:px-[48px] py-[8px] md:py-[20px] rounded-md hover:bg-transparent duration-300 ${className}`}>{text}</button>
  )
}

export default PrimaryButton