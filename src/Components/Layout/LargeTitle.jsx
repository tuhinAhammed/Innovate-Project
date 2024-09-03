import React from 'react'

const LargeTitle = ({text , className}) => {
  return (
    <h1 className={`text-[36px] md:text-[46px] font-bold ${className}`} >{text}</h1>
  )
}

export default LargeTitle