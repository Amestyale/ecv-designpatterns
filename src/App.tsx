import React from 'react'
import './App.css'
import Option from './classes/gamemanagement/Option'
import Room from './classes/Room'
import AdapterOption from './components/AdapterOption'

function App() {

  const opt = new Option("Option 1", "Ceci est la première option")
  const room = new Room(12, "Title", "Text", [opt], "buttons")
  return (
    <>
      <AdapterOption type={room.optionFacade} options={room.options} />
    </>
  )
}

export default App
