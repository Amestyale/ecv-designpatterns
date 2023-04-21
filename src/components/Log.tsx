import React from 'react'
import { VStack, Text, Heading, Box, Stack, UnorderedList,ListItem } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/button'
import AdapterOption from './AdapterOption'
import BackupManager from '../classes/gamemanagement/BackupManager'

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
      height={'45vh'}
      overflowY={'auto'}
    >
      <Heading>Logs :</Heading>
      <UnorderedList>{listItems}</UnorderedList>
      <Button onClick={()=>{
        const backupManager = new BackupManager
        backupManager.save()
      }}>Sauvegarde</Button>
    </Stack>
  )
}

export default Log
