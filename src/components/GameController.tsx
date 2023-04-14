import { Heading } from '@chakra-ui/layout'
import Player from '../classes/Player'
import useGameController from '../hooks/useGameController'
import usePlanets from '../hooks/usePlanets'
import useRooms from '../hooks/useRooms'
import Game from './Game'

type GameControllerProps = {
  player: Player
  setIsRestart: any
}

const GameController = ({ player }: GameControllerProps) => {
  const rooms = useRooms(player)
  const planets = usePlanets(rooms)
  const gameController = useGameController(player, planets)

  return <Game gameController={gameController} onGameRestart={handleRestart}/>
}

export default GameController
