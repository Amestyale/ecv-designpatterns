import { Button } from '@chakra-ui/button'
import { VStack } from '@chakra-ui/layout'
import React from 'react'
import BackupManager from '../classes/gamemanagement/BackupManager'
import ChooseOptionButtons from './ChooseOptionButtons'

const BackupInterface = () => {
  const backupManager = new BackupManager()
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
              onClick={()=> backupManager.restore(backup.data)}>
            Sauvegarde {backup.date}
            </Button>
          )
        })
      }
    </VStack>
    </>
  )
}

export default BackupInterface
