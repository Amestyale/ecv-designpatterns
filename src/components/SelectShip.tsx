import { Button, Select, VStack } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import { FaShip } from 'react-icons/fa'
import Ship from '../classes/Ship'

interface Props {
  setShip: Function
}

const leger = new Ship('leger', 20, 20, 10, 10)
const lourd = new Ship('lourd', 10, 40, 20, 20)
const ships = [
  {
    name: 'Léger',
    fuel: 12,
    health: 20,
    maxFuel: 12,
    maxHealth: 20
  },
  {
    name: 'Lourd',
    fuel: 10,
    health: 30,
    maxFuel: 10,
    maxHealth: 30
  },
]

const SelectShip = ({ setShip }: Props) => {
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const handleOnClick = () => {
    const ship = ships.find((ship) => ship.name === selectRef?.current?.value)
    if (ship) setShip(new Ship(ship.name, ship.fuel, ship.health, ship.maxFuel, ship.maxHealth))
  }
  return (
    <VStack
      minWidth={'sm'}
      borderRadius={'xl'}
      backgroundColor={'rgba(0, 0, 0, 0.8)'}
      padding={20}
    >
      <FaShip size={50} />
      <Select ref={selectRef}>
        {ships.map((ship) => (
          <option
            key={ship.name}
            value={ship.name}
          >
            {ship.name}
          </option>
        ))}
      </Select>
      <Button
        width={'full'}
        onClick={handleOnClick}
      >
        Choisissez votre vaisseau
      </Button>
    </VStack>
  )
}

export default SelectShip
function setRace(race: string) {
  throw new Error('Function not implemented.')
}
