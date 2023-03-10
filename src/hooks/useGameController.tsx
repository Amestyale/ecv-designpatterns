import React from 'react'
import GameController from '../classes/GameController'
import Planet from '../classes/Planet'
import Player from '../classes/Player'

const useGameController = (player: Player, planets: Planet[]) => {
  if (!player) throw new Error('Player is undefined')
  if (!planets) throw new Error('Planets is undefined')
  return new GameController(0, 'Game', 1000, player, planets)
}

export default useGameController
