import React from 'react'
import GameController from '../classes/GameController'
import Planet from '../classes/Planet'
import Player from '../classes/Player'
import Scenario from '../classes/Scenario'
import PlanetData from '../data/PlanetData'

const useGameController = () => {
  return GameController.getInstance()

}

export default useGameController
