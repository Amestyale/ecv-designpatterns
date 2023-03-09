import React, { useState } from 'react'
import Human from './classes/Human'
import Player from './classes/Player'
import Ship from './classes/Ship'
import SelectRace from './components/SelectRace'
import SelectShip from './components/SelectShip'

const App = () => {
  const [race, setRace] = useState<string | null>(null)
  console.log('🚀 ~ App ~ race:', race)
  const [ship, setShip] = useState<Ship | null>(null)
  console.log('🚀 ~ App ~ ship:', ship)

  const humain = new Human()
  const player = new Player(humain, 100, [null])

  return (
    <>
      {!race && <SelectRace setRace={setRace} />}
      {!ship && <SelectShip setShip={setShip} />}
    </>
  )
}

export default App
