import { Button, Select, VStack } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import { FaRocket, FaUser } from 'react-icons/fa'
import Alien from '../classes/Alien'
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
    const race = selectRef?.current?.value
    if (race === 'human') setPlayer(new Player(new Human(), 100, [null], ship))
    if (race === 'alien') setPlayer(new Player(new Alien(), 100, [null], ship))
  }
  return (
    <VStack
      minWidth={'sm'}
      borderRadius={'xl'}
      backgroundColor={'rgba(0, 0, 0, 0.8)'}
      padding={20}
    >
      <FaUser size={50} />
      <Select ref={selectRef}>
        <option value='human'>human ({new Human().maxHealth} pv)</option>
        <option value='alien'>alien ({new Alien().maxHealth} pv)</option>
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
