import { Heading } from '@chakra-ui/layout'
import Player from '../classes/Player'
import useGameController from '../hooks/useGameController'
import usePlanets from '../hooks/usePlanets'
import useRooms from '../hooks/useRooms'
import Game from './Game'

type GameControllerProps = {
  setIsRestart: any
}

const GameController = ({ }: GameControllerProps) => {

  return <Game />
}

export default GameController
