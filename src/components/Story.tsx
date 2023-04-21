import React from 'react'
import { VStack, Text, Heading, Box, Stack } from '@chakra-ui/react'
import AdapterOption from './AdapterOption'

const Story = ({ title, text, choose, optionFacade, options }: any) => {
  return (
    <Stack
      flex={2}
      justify={'center'}
      width={'60%'}
      gap={4}
      backgroundColor={'rgba(0, 0, 0, 0.8)'}
      borderRadius={8}
      padding={16}
      color={'white'}
    >
      <Heading>{br2jsx(title)}</Heading>
      <Text> {br2jsx(text)}</Text>
      <AdapterOption
        callback={choose}
        type={optionFacade}
        options={options}
      />
    </Stack>
  )
}

export default Story

const br2jsx = (text: string) => {
  return text.split('<br/>').map((item, key) => {
    return (
      <React.Fragment key={key}>
        {item}
        <br />
      </React.Fragment>
    )
  })
}
