import React, { useState } from 'react'
import { Heading,UnorderedList,ListItem, HStack, VStack } from '@chakra-ui/layout'
import GameController from '../classes/GameController'
import GameDisplay from '../classes/gamemanagement/GameDisplay'
import Option from '../classes/gamemanagement/Option'
import FlightInstruments from './FlightInstruments'
import FlightInstrument from './FlightInstrument'
import { FaCoins, FaGasPump, FaHeart } from 'react-icons/fa'
import Story from './Story'
import Log from './Log'
import FlightInstrumentGauge from './FlightInstrumentGauge'
import PlayerInventory from './PlayerInventory'
import { Stack } from '@chakra-ui/react'
import Item from '../classes/Item'
import ProgressMap from './map/ProgressMap'
import useGameController from '../hooks/useGameController'
import BackupManager from '../classes/gamemanagement/BackupManager'
import { Button } from '@chakra-ui/button'


type GameProps = {
  restart: Function
}

const Game = ({ restart }: GameProps) => {
  const gameController = useGameController()

  const title = gameController.currentRoom()?.title
  const text = gameController.currentRoom()?.text
  const options = gameController.currentRoom()?.options
  const optionFacade = gameController.currentRoom()?.optionFacade
  const logText = gameController.log

  const [refresh, setRefresh] = useState(false)
  const gameDisplay = new GameDisplay(gameController)
  const choose = (option: Option) => {
    gameController.resolveRoom(option)
    setRefresh(!refresh)
  }
  const restartGame = () => {
    restart();
  }

  if(!gameController.player || !gameController.player.ship) throw Error("Mais, vous n'êtes pas censé être là ! >.<")
  if (gameDisplay.isGameWin()) return <Heading padding='16px' backgroundColor='rgba(0,0,0,0.6)' margin="16px" borderRadius="10px">Vous avez gagné !</Heading>
  if (gameDisplay.isGameOver()) return (
    <VStack>
      <Heading padding='16px' backgroundColor='rgba(0,0,0,0.6)' textAlign="center" margin="16px" borderRadius="10px">{gameDisplay.isGameOver()}</Heading>
      
      <Button backgroundColor='rgba(0,0,0,0.8)' onClick={restartGame}>
      Je veux réessayer
      </Button>
    </VStack>

    )

  return (
    <VStack justifyContent={"space-between"} height={"90vh"} width={'100vw'}>
      <ProgressMap planets={gameDisplay.mapPlanets()} finish={ gameDisplay.mapFinishX() } />
      <HStack>
        <Log
         text={logText}
        />
        <Story
          title={title}
          text={text}
          choose={choose}
          optionFacade={optionFacade}
          options={options}
        />
        <PlayerInventory items={gameDisplay.currentInventory()} />
      </HStack>
      <FlightInstruments
        instruments={[
          <FlightInstrumentGauge percent={gameDisplay.displayShipHealth()}>
            <FaHeart />
          </FlightInstrumentGauge>,
          <FlightInstrumentGauge percent={gameDisplay.displayFuel()}>
            <FaGasPump />
          </FlightInstrumentGauge>,
          <FlightInstrument text={gameController.player.health}>
            <FaHeart />
          </FlightInstrument>,
          <FlightInstrument text={gameController.player.money}>
            <FaCoins />
          </FlightInstrument>,
        ]}
      />
    </VStack>
  )
}

export default Game
