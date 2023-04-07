import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

type FlightInstrumentProps = {
  children?: React.ReactNode
  text: string | number
  type?: 'player' | 'ship'
}

const FlightInstrument = ({ children, text, type }: FlightInstrumentProps) => {
  return (
    <Flex
      width={150}
      justify={'center'}
      align={'center'}
      gap={2}
      background={'black'}
      color={'green.300'}
      fontWeight={'bold'}
      borderRadius={8}
      padding={4}
    >
      {children}
      <Text>{text}</Text>
    </Flex>
  )
}

export default FlightInstrument
