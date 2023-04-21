import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import React from 'react'
import BackupManager from '../classes/gamemanagement/BackupManager'
import Planet from '../classes/Planet'
import PlanetData from '../data/PlanetData'
import ChooseOptionButtons from './ChooseOptionButtons'
import moment from 'moment'

const BackupInterface = ({callback}: any) => {
  const backupManager = new BackupManager()
  console.log( backupManager.getBackups())
  return (
    <>
    <VStack
      minWidth={'sm'}
      borderRadius={'xl'}
      backgroundColor={'rgba(0, 0, 0, 0.8)'}
      padding={20}
    >
      {
        backupManager.getBackups().map((backup: any) =>{
          return (
            <Button
              width={'full'}
              onClick={()=> {
                backupManager.restore(backup.data)
                callback()
              }}>
            Sauvegarde { moment.unix(backup.date).format("DD/MM/YYYY HH:mm:ss") }
            <br/>Lieu : { PlanetData.find((p)=> p.id == backup.data.currentPlanet)?.name ?? "Dans l'espace"}
            </Button>
          )
        })
      }
      <Button
        width={'full'}
        onClick={()=> {
          callback()
        }}>
        Nouvelle Partie
      </Button>
    </VStack>
    </>
  )
}

export default BackupInterface
