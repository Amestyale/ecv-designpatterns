import React from 'react'
import Option from '../classes/gamemanagement/Option'

const ChooseOptionButtons = ({ callback, options }: any) => {
  return (
    <>
      {options.map((option: Option, i: number) => {
        return (
          <button
            key={i}
            onClick={() => callback(option)}
          >
            {option.title}
          </button>
        )
      })}
    </>
  )
}

export default ChooseOptionButtons
