import { Button, Select, VStack } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import { FaShip } from 'react-icons/fa'
import Ship from '../classes/Ship'
import Vehicle from '../classes/Vehicle'

interface Props {
  setShip: Dispatch<SetStateAction<Ship | null>>
}

const leger = new Ship(12, 100, 100, [null])
const lourd = new Ship(5, 200, 200, [null])
const ships = [
  {
    name: 'leger',
    vehicule: leger,
  },
  {
    name: 'lourd',
    vehicule: lourd,
  },
]

const SelectShip = ({ setShip }: Props) => {
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const handleOnClick = () => {
    const ship = ships.find((ship) => ship.name === selectRef?.current?.value)
    if (ship) setShip(ship.vehicule)
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
            {ship.name} ({ship.vehicule.health} pv)
          </option>
        ))}
      </Select>
      <Button
        width={'full'}
        onClick={handleOnClick}
      >
        Select ship
      </Button>
    </VStack>
  )
}

export default SelectShip
function setRace(race: string) {
  throw new Error('Function not implemented.')
}
