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

type GameProps = {
  gameController: GameController
}

const Game = ({ gameController }: GameProps) => {
  const distanceFromWin = gameController.distanceFromWin()
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

  if (gameDisplay.isGameWin()) return <Heading>You win !</Heading>
  if (gameDisplay.isGameOver()) return <Heading>{gameDisplay.isGameOver()}</Heading>

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
