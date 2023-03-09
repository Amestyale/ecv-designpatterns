import React from 'react'
import Option from '../classes/gamemanagement/Option'

function ChooseOptionButtons(props: any) {
  const { options } = props
  return (
    <>
      {
        options.map((option: Option)=>{
          return (<button>{ option.title }</button>)
        })
      }
    </>
  )
}

export default ChooseOptionButtons
