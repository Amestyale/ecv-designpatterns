import React, { useState } from 'react'
import Option from '../classes/gamemanagement/Option'
import Player from '../classes/Player'
import useGameController from '../hooks/useGameController'
import usePlanets from '../hooks/usePlanets'
import useRooms from '../hooks/useRooms'
import AdapterOption from './AdapterOption'

interface Props {
  player: Player
}

const Game = ({ player }: Props) => {
  const [refresh, setRefresh] = useState(false)
  const rooms = useRooms(player)
  const planets = usePlanets(rooms)
  const gameController = useGameController(player, planets)

  const choose = (option: Option) => {
    option.modifiers.map((m) => m.apply())
    setRefresh(!refresh)
  }

  return (
    <div>
      <p>Life {player.health}</p>
      <p>Money {player.money}</p>
      <AdapterOption
        callback={choose}
        type={gameController.currentRoom().optionFacade}
        options={gameController.currentRoom().options}
      />
    </div>
  )
}

export default Game
