import React from 'react'
import { VStack } from '@chakra-ui/react'
import AdapterOption from './AdapterOption'

const Story = ({ title, text, choose, optionFacade, options }: any) => {
  return (
    <VStack flex={1}>
      {title}
      {text}
      <AdapterOption
        callback={choose}
        type={optionFacade}
        options={options}
      />
    </VStack>
  )
}

export default Story
