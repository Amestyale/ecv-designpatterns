import React, { useState } from 'react'
import Player from './classes/Player'
import Ship from './classes/Ship'
import SelectPlayer from './components/SelectPlayer'
import SelectShip from './components/SelectShip'
import { Flex } from '@chakra-ui/react'
import GameController from './components/GameController'
import GameInstance from './classes/GameController'
import useGameController from './hooks/useGameController'
import BackupInterface from './components/BackupInterface'

const App = () => {
  const [backup, setBackup] = useState<number | null>(null)
  const [player, setPlayer] = useState<Player | null>(null)
  const [ship, setShip] = useState<Ship | null>(null)
  const [isRestart, setIsRestart] = useState<boolean>(false);

  const gameInstance = useGameController()

  const getStep = () => {
    if(!gameInstance.player){
      return <SelectPlayer setPlayer={(player: Player) => { 
        setPlayer(player)
        gameInstance.player = player
      }} />
    } else if (gameInstance.player && !gameInstance.player.ship) {
      return <SelectShip setShip={(ship: Ship) => {
        setShip(ship)
        if(gameInstance.player) gameInstance.player.ship = ship
        gameInstance.start()
      }} />
    } else {
      return <GameController setIsRestart={setIsRestart}/>
    }
  }
  return (
    <Flex
      direction={'column'}
      justify={'space-around'}
      align={'center'}
      minHeight={'100vh'}
    >
      { getStep() }
    </Flex>
  )
}

export default App
