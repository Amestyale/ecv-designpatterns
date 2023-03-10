import { Heading } from '@chakra-ui/layout'
import Player from '../classes/Player'
import useGameController from '../hooks/useGameController'
import usePlanets from '../hooks/usePlanets'
import useRooms from '../hooks/useRooms'
import Game from './Game'

interface Props {
  player: Player
}

const GameController = ({ player }: Props) => {
  const rooms = useRooms(player)
  const planets = usePlanets(rooms)
  const gameController = useGameController(player, planets)

  return <Game gameController={gameController} />
}

export default GameController
