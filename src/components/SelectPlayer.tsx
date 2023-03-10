import { Button, Select, VStack } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import Human from '../classes/Human'
import Player from '../classes/Player'
import Ship from '../classes/Ship'

interface PropsType {
  ship: Ship
  setPlayer: Dispatch<SetStateAction<Player | null>>
}

const SelectPlayer = ({ ship, setPlayer }: PropsType) => {
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const handleOnClick = () => {
    //todo
    const race = selectRef?.current?.value

    const player = new Player(new Human(), 100, [null], ship)
    if (player) setPlayer(player)
  }
  return (
    <VStack minWidth={'sm'}>
      <Select ref={selectRef}>
        <option value='human'>human</option>
        <option value='alien'>alien</option>
      </Select>
      <Button
        width={'full'}
        onClick={handleOnClick}
      >
        Select race
      </Button>
    </VStack>
  )
}

export default SelectPlayer