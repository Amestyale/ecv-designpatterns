import { Button } from '@chakra-ui/button'
import React from 'react'
import Option from '../classes/gamemanagement/Option'

const ChooseOptionButtons = ({ callback, options }: any) => {
  return (
    <>
      {options.map((option: Option, i: number) => {
        return (
          <Button
            key={i}
            onClick={() => callback(option)}
          >
            {option.title}
          </Button>
        )
      })}
    </>
  )
}

export default ChooseOptionButtons
