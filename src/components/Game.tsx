import React, { useState } from 'react'
import { Heading } from '@chakra-ui/layout'
import { Button, Select, VStack } from '@chakra-ui/react'
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
  onGameRestart: any
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
  const [isRestart, setIsRestart] = useState<boolean>(false);
  const handleRestart = () => {
    setIsRestart(true);
  };
  const restartGame = () => {
    console.log("restart")
    console.log(gameController.player)
    handleRestart();
  }

  if (gameDisplay.isGameWin()) return <Heading>You win !</Heading>
  if (gameDisplay.isGameOver()) return (
    <VStack>
      <Heading>{gameDisplay.isGameOver()}</Heading>
      <Button onClick={restartGame}>New game</Button>
    </VStack>

    )

  return (
    <>
      <FlightInstruments instruments={[<FlightInstrument text={distanceFromWin}></FlightInstrument>]} />
      <Story
        title={title}
        text={text}
        choose={choose}
        optionFacade={optionFacade}
        options={options}
      />
    
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
    </>
  )
}

export default Game
