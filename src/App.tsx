import React, { useState } from 'react'
import Player from './classes/Player'
import Ship from './classes/Ship'
import Game from './components/Game'
import SelectRace from './components/SelectPlayer'
import SelectShip from './components/SelectShip'

const App = () => {
  const [player, setPlayer] = useState<Player | null>(null)
  const [ship, setShip] = useState<Ship | null>(null)

  return (
    <>
      {!player && <SelectRace setPlayer={setPlayer} />}
      {!ship && <SelectShip setShip={setShip} />}
      {player && ship && (
        <Game
          player={player}
          ship={ship}
        />
      )}
    </>
  )
}

export default App
