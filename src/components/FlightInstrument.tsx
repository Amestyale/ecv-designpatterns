import React from 'react'
import { HStack, Text } from '@chakra-ui/react'

type FlightInstrumentProps = {
  children?: React.ReactNode
  text: string | number
}

const FlightInstrument = ({ children, text }: FlightInstrumentProps) => {
  return (
    <HStack
      background={'black'}
      color={'green.300'}
      fontWeight={'bold'}
      padding={4}
      borderRadius={8}
    >
      {children}
      <Text>{text}</Text>
    </HStack>
  )
}

export default FlightInstrument
