import React from 'react'
import ModifierPlayerStat from '../classes/gamemanagement/Modifier/ModifierPlayerStat'
import Option from '../classes/gamemanagement/Option'
import Player from '../classes/Player'
import Room from '../classes/Room'
import { PlayerDataList } from '../types/PlayerStatList'

const useRooms = (player: Player) => {
  const room1_opt1 = new Option('Option 1', 'Ceci est la première option', [
    new ModifierPlayerStat(player, PlayerDataList.money, -50),
    new ModifierPlayerStat(player, PlayerDataList.health, 100),
  ])
  const room1_opt2 = new Option('Option 2', 'Ceci est la première option', [
    new ModifierPlayerStat(player, PlayerDataList.money, -50),
    new ModifierPlayerStat(player, PlayerDataList.health, 100),
  ])
  const room1 = new Room(1, 'Title', 'Text', [room1_opt1, room1_opt2], 'buttons')

  const room2_opt1 = new Option('Option 1', 'Ceci est la première option', [
    new ModifierPlayerStat(player, PlayerDataList.money, -50),
    new ModifierPlayerStat(player, PlayerDataList.health, 100),
  ])
  const room2_opt2 = new Option('Option 2', 'Ceci est la première option', [
    new ModifierPlayerStat(player, PlayerDataList.money, -50),
    new ModifierPlayerStat(player, PlayerDataList.health, 100),
  ])
  const room2 = new Room(2, 'Title', 'Text', [room2_opt1, room2_opt2], 'buttons')

  const rooms = [room1, room2]
  return rooms
}

export default useRooms
