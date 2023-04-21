import React from 'react'
import { VStack, Text, Heading, Box, Stack } from '@chakra-ui/react'
import AdapterOption from './AdapterOption'
import Item from '../classes/Item'

const PlayerInventory = ({ items }: any) => {
  return (
    <Stack
    flex={1}
    justify={'center'}
    width={'10%'}
    gap={4}
    backgroundColor={'rgba(0, 0, 0, 0.8)'}
    borderRadius={8}
    padding={16}
    color={'white'}
    height={'45vh'}
    overflowY={'auto'}
    >
      <Heading>Inventaire</Heading>
      {
        items.map((item: Item)=>{
          return <Text> {item.name} </Text>
        })
      }
    </Stack>
  )
}

export default PlayerInventory