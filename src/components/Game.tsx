import React, { useState } from 'react'
import Chapter from '../classes/Chapter'
import GameController from '../classes/GameController'
import ModifierPlayerStat from '../classes/gamemanagement/Modifier/ModifierPlayerStat'
import Option from '../classes/gamemanagement/Option'
import Planet from '../classes/Planet'
import Player from '../classes/Player'
import Room from '../classes/Room'
import useChapters from '../hooks/useChapters'
import useRooms from '../hooks/useRooms'
import { PlayerDataList } from '../types/PlayerStatList'
import AdapterOption from './AdapterOption'

interface Props {
  player: Player
}

const Game = ({ player }: Props) => {
  const [refresh, setRefresh] = useState(false)
  const rooms = useRooms(player)
  const chapters = useChapters(rooms)

  const gameController = new GameController(0, 'Game', 1000, player, chapters)

  const choose = (option: Option) => {
    option.modifiers.map((m) => m.apply())
    setRefresh(!refresh)
  }

  return (
    <div>
      <p>Life {player.health}</p>
      <p>Money {player.money}</p>
      {/* <AdapterOption
        callback={choose}
        type={room.optionFacade}
        options={room.options}
      /> */}
    </div>
  )
}

export default Game
