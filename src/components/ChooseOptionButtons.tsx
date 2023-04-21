import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/button'
import Option from '../classes/gamemanagement/Option'
import { HStack } from '@chakra-ui/layout'
import useGameController from '../hooks/useGameController'

const gameController = useGameController()

const ChooseOptionButtons = ({ callback, options }: any) => {
  return (
    <ButtonGroup>
      {options.map((option: Option, i: number) => {
        return (
          <Button
            key={i}
            onClick={() => callback(option)}
            isDisabled={!gameController.isActive(option)}
          >
            {option.title}
          </Button>
        )
      })}
    </ButtonGroup>
  )
}

export default ChooseOptionButtons
