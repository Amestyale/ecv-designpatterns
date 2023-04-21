import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/button'
import Option from '../classes/gamemanagement/Option'
import { HStack, Wrap, WrapItem } from '@chakra-ui/layout'
import useGameController from '../hooks/useGameController'

const gameController = useGameController()

const ChooseOptionButtons = ({ callback, options }: any) => {
  return (
    <Wrap
      display={"contents"}
    >
      {options.map((option: Option, i: number) => {
        return (
          <WrapItem>
          <Button
            key={i}
            onClick={() => callback(option)}
            isDisabled={!gameController.isActive(option)}
          >
            {option.title}
          </Button>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}

export default ChooseOptionButtons
