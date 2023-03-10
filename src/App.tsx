import React, { useState } from 'react'
import Player from './classes/Player'
import Ship from './classes/Ship'
import Game from './components/Game'
import SelectPlayer from './components/SelectPlayer'
import SelectShip from './components/SelectShip'

const App = () => {
  const [player, setPlayer] = useState<Player | null>(null)
  const [ship, setShip] = useState<Ship | null>(null)

  return (
    <>
      {!ship && <SelectShip setShip={setShip} />}
      {!player && ship && (
        <SelectPlayer
          ship={ship}
          setPlayer={setPlayer}
        />
      )}
      {player && ship && <Game player={player} />}
    </>
  )
}

export default App
