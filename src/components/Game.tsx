import { Box, Center, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import GameController from '../classes/GameController'
import Option from '../classes/gamemanagement/Option'
import AdapterOption from './AdapterOption'
import { FaHeart, FaShieldAlt, FaGasPump, FaDollarSign, FaBitcoin, FaCoins } from 'react-icons/fa'

interface Props {
  gameController: GameController
}

const Game = ({ gameController }: Props) => {
  const [refresh, setRefresh] = useState(false)

  const choose = (option: Option) => {
    gameController.resolveRoom(option)
    setRefresh(!refresh)
  }

  if (gameController.isGameWin()) return <Heading>You win !</Heading>
  if (gameController.isGameLoose()) return <Heading>You loose !</Heading>
  return (
    <>
      <HStack
        width={'full'}
        justify={'space-between'}
        padding={5}
        backgroundColor={'rgba(0, 0, 0, 0.8)'}
      >
        <HStack>
          <Text>Ship</Text>
          <HStack>
            <FaHeart />
            <Text>{gameController.player.ship.health}</Text>
          </HStack>
          <HStack>
            <FaGasPump />
            <Text>{gameController.player.ship.fuel}</Text>
          </HStack>
        </HStack>
        <HStack>
          <Text>Distance {gameController.distanceFromWin()}</Text>
        </HStack>
        <HStack>
          <Text>User</Text>
          <HStack>
            <FaHeart />
            <Text>{gameController.player.health}</Text>
          </HStack>
          <HStack>
            <FaCoins />
            <Text>{gameController.player.money}</Text>
          </HStack>
        </HStack>
      </HStack>
      <Center flex={1}>
        <AdapterOption
          callback={choose}
          type={gameController.currentRoom().optionFacade}
          options={gameController.currentRoom().options}
        />
      </Center>
    </>
  )
}

export default Game
