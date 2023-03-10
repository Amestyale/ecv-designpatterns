import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/button'
import Option from '../classes/gamemanagement/Option'
import { HStack } from '@chakra-ui/layout'

const ChooseOptionButtons = ({ callback, options }: any) => {
  return (
    <HStack
      justify={'space-evenly'}
      minWidth={'2xl'}
      borderRadius={'xl'}
      backgroundColor={'rgba(0, 0, 0, 0.8)'}
      padding={20}
    >
      {options.map((option: Option, i: number) => {
        return (
          <Button
            key={i}
            onClick={() => callback(option)}

            color={(option.canBeChoosen() ? "inherit" : "red")}
          >
            {option.title}
          </Button>
        )
      })}
    </HStack>
  )
}

export default ChooseOptionButtons
