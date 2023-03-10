import React, { useCallback, useEffect, useState } from 'react'
import './App.css'
import ModifierPlayerStat from './classes/gamemanagement/Modifier/ModifierPlayerStat'
import Option from './classes/gamemanagement/Option'
import Human from './classes/Human'
import Item from './classes/Item'
import ItemPlayer from './classes/ItemPlayer'
import ItemShip from './classes/ItemShip'
import Player from './classes/Player'
import Room from './classes/Room'
import Ship from './classes/Ship'
import AdapterOption from './components/AdapterOption'
import { PlayerDataList, PlayerStatList } from './types/PlayerStatList'
import { ShipStatList } from './types/ShipStatList'

function App() {
  const pItem = new ItemPlayer('jeu-de-carte', 'Jeu de 54 cartes', 'un jeu de cartes, basique', [{name: PlayerStatList.luck, modifier: 3}],'useless','jeu')

  const sItem = new ItemShip('reservoir', 'Réservoir', 'Stockez plus', [{name: ShipStatList.maxFuel, modifier: 5}],'mecanique','essence')

  const ship = new Ship(500, 100, 100, [sItem])
  const player = new Player(200, 150, new Human(), [pItem], ship)
  
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
    console.log(option)
    console.log(player)
    option.modifiers.map(m => m.apply())
    console.log(player)
  }

  return (
    <>
    <h2>Joueur</h2>
    <table>
      <thead>
      <tr>
        <th>Santé</th>
        <th>Argent</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{ player.health }</td>
        <td>{ player.money }</td>
      </tr>
      </tbody>
    </table>
    
    
    <h2>Vaisseau</h2>
      <table>
        <thead>
        <tr>
          <th>Santé</th>
          <th>Résistance</th>
          <th>Fuel</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{ ship.health }</td>
          <td>{ ship.shield }</td>
          <td>{ ship.fuel }</td>
        </tr>
        </tbody>
      </table>

      <AdapterOption callback={choose} type={room.optionFacade} options={room.options} />
    </>
  )
}

export default App
