import React, { useState } from 'react'
import { Heading, HStack } from '@chakra-ui/layout'
import GameController from '../classes/GameController'
import GameDisplay from '../classes/gamemanagement/GameDisplay'
import Option from '../classes/gamemanagement/Option'
import FlightInstruments from './FlightInstruments'
import FlightInstrument from './FlightInstrument'
import { FaCoins, FaGasPump, FaHeart } from 'react-icons/fa'
import Story from './Story'
import FlightInstrumentGauge from './FlightInstrumentGauge'

type GameProps = {
  gameController: GameController
}

const Game = ({ gameController }: GameProps) => {
  const distanceFromWin = gameController.distanceFromWin()
  const title = gameController.currentRoom()?.title
  const text = gameController.currentRoom()?.text
  const options = gameController.currentRoom()?.options
  const optionFacade = gameController.currentRoom()?.optionFacade

  const [refresh, setRefresh] = useState(false)
  const gameDisplay = new GameDisplay(gameController)
  const choose = (option: Option) => {
    gameController.resolveRoom(option)
    setRefresh(!refresh)
  }

  if (gameDisplay.isGameWin()) return <Heading>You win !</Heading>
  if (gameDisplay.isGameOver()) return <Heading>{gameDisplay.isGameOver()}</Heading>

  return (
    <>
      <FlightInstruments
        instruments={[
          <HStack>
            <Heading>Distance</Heading>
            <FlightInstrument text={distanceFromWin}></FlightInstrument>
          </HStack>,
        ]}
      />
      <Story
        title={title}
        text={text}
        choose={choose}
        optionFacade={optionFacade}
        options={options}
      />
      <FlightInstruments
        instruments={[
          <HStack>
            <Heading>Player</Heading>
            <FlightInstrument text={gameController.player.health}>
              <FaHeart />
            </FlightInstrument>
            <FlightInstrument text={gameController.player.money}>
              <FaCoins />
            </FlightInstrument>
          </HStack>,
          <HStack align={'flex-end'}>
            <Heading>Ship</Heading>
            <FlightInstrumentGauge percent={gameDisplay.displayShipHealth()}>
              <FaHeart />
            </FlightInstrumentGauge>
            <FlightInstrumentGauge percent={gameDisplay.displayFuel()}>
              <FaGasPump />
            </FlightInstrumentGauge>
          </HStack>,
        ]}
      />
    </>
  )
}

export default Game
