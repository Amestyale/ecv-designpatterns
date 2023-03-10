import React, { useState } from 'react'
import GameController from '../classes/GameController'
import GameInstance from '../classes/GameController'
import ModifierPlayerStat from '../classes/gamemanagement/Modifier/ModifierPlayerStat'
import ModifierShipStat from '../classes/gamemanagement/Modifier/ModifierShipStats'
import Option from '../classes/gamemanagement/Option'
import Planet from '../classes/Planet'
import Player from '../classes/Player'
import Room from '../classes/Room'
import Ship from '../classes/Ship'
import { PlayerDataList } from '../types/PlayerStatList'
import { ShipDataList } from '../types/ShipStatList'
import AdapterOption from './AdapterOption'

interface Props {
  player: Player
}

const Game = ({ player }: Props) => {

  const [refresh, setRefresh] = React.useState(false)


  const opt11 = new Option(
    "Leur donner de l'essence", 
    "Vais devoir faire le plein plus tôt que prévu...",
    [
      new ModifierShipStat(player.ship, ShipDataList.fuel, -50)
    ]
  )
  const opt12 = new Option(
    "Faites feu, j'vous attends !", 
    "",
    [
      new ModifierShipStat(player.ship, ShipDataList.shield, -50)
    ]
  )
  const room = new Room(12, "Title", "Text", [opt11, opt12], "buttons")

  
  const opt21 = new Option(
    "Argent contre santé", 
    "C'est cher d'avoir le droit de respirer...",
    [
      new ModifierPlayerStat(player, PlayerDataList.money, -50),
      new ModifierPlayerStat(player, PlayerDataList.health, 50)
    ]
  )
  const opt22 = new Option(
    "Santé contre argent", 
    "Ca vaut tant que ça un foie ?",
    [
      new ModifierPlayerStat(player, PlayerDataList.money, 50),
      new ModifierPlayerStat(player, PlayerDataList.health, -50)
    ]
  )
  const room2 = new Room(12, "L'hopital Kisfoudlasharitey", "Bienvenue à l'hopital Kisfoudlasharitey, que puis-je pour vous ?", [opt21, opt22], "buttons")

  const planet1 = new Planet(1, 1, 'Saturne', 'Saturne pas rond', 'Des anneaux autour d\'une boule de gaz',[room]);
  const planet2 = new Planet(1, 2, 'Chez les connards', 'Pas que des gens biens ici', 'Une planète pas fréquentable',[room2]);

  const gameInstance = new GameController(1, 'Game Test', 1, player, [planet1, planet2] )

  const choose = (option: Option) => {
    option.modifiers.map(m => m.apply())
    setRefresh(!refresh)
  }


  return (
  <div>Game
  <p>Life {player.health}</p>
  <p>Money {player.money}</p>
  
  <AdapterOption callback={choose} type={room.optionFacade} options={room.options} />
  </div>
  )
}

export default Game
