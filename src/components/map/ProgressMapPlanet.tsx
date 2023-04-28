import React from 'react'
import { VStack, Text, Heading, Box, Stack } from '@chakra-ui/react'
import { BiPlanet } from 'react-icons/bi'
import { Tooltip } from '@chakra-ui/react'

const ProgressMapPlanet = ({ left, current }: any) => {
  return (
    <Stack
      position={'absolute'}
      left={`${left}%`}
      top={'50%'}
      transform={'translate(-50%, -50%)'}
      background={current ? 'gold' : '#5a8527'}
      zIndex={2}
      padding={'4px'}
      borderRadius={'50%'}
      style={{ margin: 0 }}
    >
      <BiPlanet
        color={'white'}
        fontSize={'24px'}
      />
    </Stack>
  )
}

export default ProgressMapPlanet
