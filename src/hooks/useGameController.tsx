import React from 'react'
import GameController from '../classes/GameController'
import Planet from '../classes/Planet'
import Player from '../classes/Player'
import Scenario from '../classes/Scenario'
import PlanetData from '../data/PlanetData'

const useGameController = (player: Player, planets: Planet[]) => {
  if (!player) throw new Error('Player is undefined')
  if (!planets) throw new Error('Planets is undefined')

  return GameController.getInstance()

}

export default useGameController
