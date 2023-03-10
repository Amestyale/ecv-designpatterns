import React, { useState } from 'react'
import GameController from '../classes/GameController'
import Option from '../classes/gamemanagement/Option'
import AdapterOption from './AdapterOption'

interface Props {
  gameController: GameController
}

const Game = ({ gameController }: Props) => {
  const [refresh, setRefresh] = useState(false)

  const choose = (option: Option) => {
    gameController.resolveRoom(option)
    setRefresh(!refresh)
  }

  return (
    <>
      <AdapterOption
        callback={choose}
        type={gameController.currentRoom().optionFacade}
        options={gameController.currentRoom().options}
      />
    </>
  )
}

export default Game
