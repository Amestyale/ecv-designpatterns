import React, { useState } from 'react'
import ModifierPlayerStat from '../classes/gamemanagement/Modifier/ModifierPlayerStat'
import Option from '../classes/gamemanagement/Option'
import Player from '../classes/Player'
import Room from '../classes/Room'
import Ship from '../classes/Ship'
import { PlayerDataList } from '../types/PlayerStatList'
import AdapterOption from './AdapterOption'

interface Props {
  player: Player
}

const Game = ({ player }: Props) => {
  const [clic, setClic] = useState({number: 0})
  const [refresh, setRefresh] = React.useState(false)

  const opt = new Option(
    "Option 1", 
    "Ceci est la première option",
    [
      new ModifierPlayerStat(player, PlayerDataList.money, -50),
      new ModifierPlayerStat(player, PlayerDataList.health, 100)
    ]
  )
  const room = new Room(12, "Title", "Text", [opt], "buttons")

  const choose = (option: Option) => {
    option.modifiers.map(m => m.apply())
    setRefresh(!refresh)
  }


  return (
  <div>Game {clic.number}
  <p>Life {player.health}</p>
  <p>Money {player.money}</p>
  
  <AdapterOption callback={choose} type={room.optionFacade} options={room.options} />
  </div>
  )
}

export default Game
