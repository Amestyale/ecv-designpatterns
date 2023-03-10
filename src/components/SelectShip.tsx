import React, { Dispatch, SetStateAction, useRef } from 'react'
import Ship from '../classes/Ship'
import Vehicle from '../classes/Vehicle'

interface Props {
  setShip: Dispatch<SetStateAction<Ship | null>>
}

const leger = new Vehicle('ship', 100, 100, 100)
const lourd = new Vehicle('ship', 200, 200, 200)
const ships = [
  {
    name: 'leger',
    leger,
  },
  {
    name: 'lourd',
    lourd,
  },
]

const SelectShip = ({ setShip }: Props) => {
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const handleOnClick = () => {
    const ship = ships.find((ship) => ship.name === selectRef?.current?.value)
    if (ship) setShip(new Ship(100, 100, 100, [null]))
  }
  return (
    <>
      <select ref={selectRef}>
        {ships.map((ship) => (
          <option
            key={ship.name}
            value={ship.name}
          >
            {ship.name}
          </option>
        ))}
      </select>
      <button onClick={handleOnClick}>Select race</button>
    </>
  )
}

export default SelectShip
function setRace(race: string) {
  throw new Error('Function not implemented.')
}
