import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/button'
import Option from '../classes/gamemanagement/Option'

const ChooseOptionButtons = ({ callback, options }: any) => {
  return (
    <ButtonGroup>
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
    </ButtonGroup>
  )
}

export default ChooseOptionButtons
