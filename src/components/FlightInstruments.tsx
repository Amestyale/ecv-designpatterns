import React from 'react'
import { HStack } from '@chakra-ui/react'

const FlightInstruments = ({ instruments }: any) => {
  return (
    <HStack
      width={'full'}
      justify={'space-evenly'}
      padding={5}
      alignItems={'flex-end'}
    >
      {instruments.map((instrument: any) => instrument)}
    </HStack>
  )
}

export default FlightInstruments
