import React, { useState } from 'react'
import Player from './classes/Player'
import Ship from './classes/Ship'
import SelectPlayer from './components/SelectPlayer'
import SelectShip from './components/SelectShip'
import { Center } from '@chakra-ui/react'
import GameController from './components/GameController'

const App = () => {
  const [player, setPlayer] = useState<Player | null>(null)
  const [ship, setShip] = useState<Ship | null>(null)

  return (
    <Center minHeight={'100vh'}>
      {!ship && <SelectShip setShip={setShip} />}
      {!player && ship && (
        <SelectPlayer
          ship={ship}
          setPlayer={setPlayer}
        />
      )}
      {player && ship && <GameController player={player} />}
    </Center>
  )
}

export default App
