import React from 'react'
import Option from '../classes/gamemanagement/Option'

const ChooseOptionButtons = (props: any) => {
  const { callback, options } = props
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
