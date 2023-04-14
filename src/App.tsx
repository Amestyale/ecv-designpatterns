import React, { useState } from 'react'
import Player from './classes/Player'
import Ship from './classes/Ship'
import SelectPlayer from './components/SelectPlayer'
import SelectShip from './components/SelectShip'
import { Flex } from '@chakra-ui/react'
import GameController from './components/GameController'

const App = () => {
  const [player, setPlayer] = useState<Player | null>(null)
  const [ship, setShip] = useState<Ship | null>(null)
  const [isRestart, setIsRestart] = useState<boolean>(false);

  return (
    <Flex
      direction={'column'}
      justify={'center'}
      align={'center'}
      minHeight={'100vh'}
    >
      {!ship && <SelectShip setShip={setShip} />}
      {!player && ship && (
        <SelectPlayer
          ship={ship}
          setPlayer={setPlayer}
        />
      )}
      {player && ship && <GameController player={player} setIsRestart={setIsRestart}/>}
    </Flex>
  )
}

export default App
