import React, { Dispatch, SetStateAction, useRef } from 'react'

interface PropsType {
  setRace: Dispatch<SetStateAction<string | null>>
}

const SelectRace = ({ setRace }: PropsType) => {
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const handleOnClick = () => {
    const race = selectRef?.current?.value
    if (race) setRace(race)
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

export default SelectRace
