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
    default:
      return <>error</>
  }
}

export default AdapterOption
