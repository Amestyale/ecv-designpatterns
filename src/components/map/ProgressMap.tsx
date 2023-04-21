import React from 'react'
import { VStack, Text, Heading, Box, Stack } from '@chakra-ui/react'
import ProgressMapPlanet from './ProgressMapPlanet'
import Planet from '../../classes/Planet'
import MapPlanet from '../../interfaces/MapPlanet'

const ProgressMap = ({ planets, finish }: any) => {
  return (
    <Stack
    justify={'center'}
    height={"72px"}
    width={'80%'}
    backgroundColor={'rgba(0, 0, 0, 1)'}
    borderRadius={8}
    color={'white'}
    position={'relative'}
    >
      { 
        planets.map((planet: MapPlanet)=>{
          return <ProgressMapPlanet left={planet.left} current={planet.current}/>
        })
      }
      <Stack 
      style={{
        height: "100%",
        backgroundColor: '#fff',
        backgroundImage: 'linear-gradient(45deg, #16161d 25%, transparent 25%, transparent 75%, #16161d 75%), linear-gradient(45deg, #16161d 25%, transparent 25%, transparent 75%, #16161d 75%)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 10px 10px',
        position: 'absolute',
        left: `${finish}%`,
        top: 0,
        width: '20px',
        margin: 0
      }}>
        
      </Stack>
    </Stack>
  )
}

export default ProgressMap