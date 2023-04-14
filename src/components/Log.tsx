import React from 'react'
import { VStack, Text, Heading, Box, Stack, UnorderedList,ListItem } from '@chakra-ui/react'
import AdapterOption from './AdapterOption'

const Log = ({ text }: any) => {

  const stringArray = text.split(';');

  const lastFiveItems = stringArray.slice(-5);

  const listItems = lastFiveItems.map((string: string) => (
    <ListItem>{string}</ListItem>
  ));

  console.log(stringArray);
  
  return (
    <Stack
      flex={1}
      justify={'center'}
      width={'xl'}
      gap={4}
      backgroundColor={'rgba(0, 0, 0, 0.8)'}
      borderRadius={8}
      padding={8}
      color={'white'}
    >
      <Heading>Logs :</Heading>
      <UnorderedList>{listItems}</UnorderedList>
    </Stack>
  )
}

export default Log
