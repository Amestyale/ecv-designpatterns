import React from 'react'
import { HStack, Text, Box } from '@chakra-ui/react'

type FlightInstrumentGaugeProps = {
  children?: React.ReactNode
  percent: number
}

const FlightInstrumentGauge = ({ children, percent }: FlightInstrumentGaugeProps) => {
  return (
    <HStack
      background={'black'}
      color={'green.300'}
      fontWeight={'bold'}
      padding={4}
      borderRadius={8}
      alignItems={'flex-end'}
    >
      {children}
      <Box
        background={'white'}
        borderRadius={'5px'}
        height={'100px'}
        width={'20px'}
        position={'relative'}
        >
        
        <Box
          background={'green.300'}
          borderRadius={'5px'}
          height={`${percent}%`}
          position={'absolute'}
          bottom={'0'}
          left={'0'}
          width={'100%'}
          >
        </Box>
      </Box>
    </HStack>
  )
}

export default FlightInstrumentGauge
