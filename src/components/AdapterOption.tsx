import React from 'react'
import ChooseOptionButtons from './ChooseOptionButtons'

const AdapterOption = ({ type, options, callback }: any) => {
  switch (type) {
    case 'buttons':
      return (
        <ChooseOptionButtons
          callback={callback}
          options={options}
        />
      )
      break
    default:
      return <h2>Hmmm, nan :l</h2>
  }
}

export default AdapterOption
