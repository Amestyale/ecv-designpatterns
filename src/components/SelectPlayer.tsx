import React, { Dispatch, SetStateAction, useRef } from 'react'
import Human from '../classes/Human'
import Player from '../classes/Player'

interface PropsType {
  setPlayer: Dispatch<SetStateAction<Player | null>>
}

const humain = new Human()
const player = new Player(humain, 100, [null])

const SelectPlayer = ({ setPlayer }: PropsType) => {
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const handleOnClick = () => {
    const race = selectRef?.current?.value
    if (race) setPlayer(player)
  }
  return (
    <>
      <select ref={selectRef}>
        <option value='human'>human</option>
        <option value='alien'>alien</option>
      </select>
      <button onClick={handleOnClick}>Select race</button>
    </>
  )
}

export default SelectPlayer
