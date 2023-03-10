import React from 'react'
import Planet from '../classes/Planet'
import Room from '../classes/Room'

const usePlanet = (rooms: Room[]) => {
  if (!rooms) throw new Error('Rooms is undefined')
  const planet = new Planet(0, 0, 'name', 'description', 'appearance', rooms)
  return [planet]
}

export default usePlanet
