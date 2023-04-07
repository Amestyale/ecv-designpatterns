import React, { useState } from 'react'
import { Heading } from '@chakra-ui/layout'
import GameController from '../classes/GameController'
import GameDisplay from '../classes/gamemanagement/GameDisplay'
import Option from '../classes/gamemanagement/Option'
import FlightInstruments from './FlightInstruments'
import FlightInstrument from './FlightInstrument'
import { FaCoins, FaGasPump, FaHeart } from 'react-icons/fa'
import Story from './Story'

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
          <FlightInstrument text={gameController.player.ship.health}>
            <FaHeart />
          </FlightInstrument>,
          <FlightInstrument text={gameController.player.ship.fuel}>
            <FaGasPump />
          </FlightInstrument>,
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
