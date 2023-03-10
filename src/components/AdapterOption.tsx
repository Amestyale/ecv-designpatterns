import React from 'react'
import ChooseOptionButtons from './ChooseOptionButtons';

function AdapterOption(props: any) {
  const { type, options, callback } = props

  switch(type){
    case "buttons":
      return (<ChooseOptionButtons callback={callback} options={options} />)
      break;
    default:
      return (<h2>Hmmm, nan :l</h2>)

  }
}

export default AdapterOption
