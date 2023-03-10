import React from 'react'
import Chapter from '../classes/Chapter'
import Planet from '../classes/Planet'
import Room from '../classes/Room'

const useChapters = (rooms: Room[]) => {
  const planet = new Planet(0, 'Planet', 'Text', 'image', rooms)
  const chapter = new Chapter(0, 0, 0, planet)
  return [chapter]
}

export default useChapters
