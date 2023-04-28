import React, { Dispatch, SetStateAction, useRef } from 'react'
import { Button, Select, VStack } from '@chakra-ui/react'
import { FaUser } from 'react-icons/fa'
import Player from '../classes/Player'
import Ship from '../classes/Ship'

interface PropsType {
  setPlayer: Function
}

const SelectPlayer = ({ setPlayer }: PropsType) => {
  const selectRef = useRef<HTMLSelectElement | null>(null)

  const handleOnClick = () => {
    const race = selectRef?.current?.value
    if (race === 'human') setPlayer(new Player('human', 40, 5, 50))
    if (race === 'alien') setPlayer(new Player('alien', 40, 5, 50))
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
        <option value='human'>Humain</option>
        <option value='alien'>Alien</option>
      </Select>
      <Button
        width={'full'}
        onClick={handleOnClick}
      >
        Choisissez votre ethnie
      </Button>
    </VStack>
  )
}

export default SelectPlayer
