import React from 'react'

const Button = ({button_text,button_class}) => {
  return (
    <div className={`w-[185px] h-[50px] border-transparent border-2 hover:border-main-color hover:bg-transparent duration-300 hover:text-main-color bg-main-color font-main text-bg-main font-bold items-center text-center align-middle flex cursor-pointer justify-center text-[14px]${button_class}`}>
        <h1>{button_text}</h1>
    </div>
  )
}

export default Button