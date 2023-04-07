import React from 'react'
import { VStack, Text, Heading, Box, Stack } from '@chakra-ui/react'
import AdapterOption from './AdapterOption'

const Story = ({ title, text, choose, optionFacade, options }: any) => {
  return (
    <Stack
      flex={1}
      justify={'center'}
      width={'4xl'}
      gap={4}
      backgroundColor={'rgba(0, 0, 0, 0.8)'}
      borderRadius={8}
      padding={16}
      color={'white'}
    >
      <Heading>{title}</Heading>
      <Text> {text}</Text>
      <AdapterOption
        callback={choose}
        type={optionFacade}
        options={options}
      />
    </Stack>
  )
}

export default Story
