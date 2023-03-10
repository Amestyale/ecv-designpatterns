import React from 'react'
import Player from '../classes/Player'
import Ship from '../classes/Ship'

interface Props {
  player: Player
  ship: Ship
}

const Game = ({ player, ship }: Props) => {
  return <div>Game</div>
}

export default Game
