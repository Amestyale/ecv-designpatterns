import GameController from "../GameController"
import Planet from "../Planet"
import { BackupGame } from "./BackupTypes"
import Scenario from '../Scenario'
import PlanetData from "../../data/PlanetData"


class Backup {
  public date: number
  public data: string

  constructor(data: string){
    this.date = Date.now()
    this.data = data
  }
}
export default class BackupManager {
  
  public save() {
    const data = GameController.getInstance().saveGame()
    const backup = new Backup(JSON.stringify(data))

    let backups = [...this.getBackups()]
    backups.push(backup)
    localStorage.setItem('space-game-backup', JSON.stringify(backups))
  }

  public getBackups()
  {
    let allBackupsJSON = localStorage.getItem('space-game-backup')
    let arr = []
    
    if(allBackupsJSON){
      const decode = JSON.parse(allBackupsJSON)
      if(Array.isArray(decode)){
        arr = decode
      }
    }
    arr.map((b: Backup)=>{
      if(b.data) b.data = JSON.parse(b.data)
    })

    return (allBackupsJSON) ? arr : []
  }

  public findBackup (date: number) : BackupGame
  {
    let backups = [...this.getBackups()]
    return backups.find((backup) => {
      return backup.date == date
    })
  }

  public restore(backup: any)
  {
    console.log(backup)
    const gameInstance = GameController.getInstance()
 
    const scenario = new Scenario(this)

    gameInstance.inevent = backup.inevent
    gameInstance.inspace = backup.inspace
    gameInstance.canevent = backup.canevent
    gameInstance.distance = backup.distance
    gameInstance.currentRoomIndex = backup.currentRoomIndex
    gameInstance.log = backup.log
    gameInstance.distance = backup.distance

    gameInstance.planets = scenario.InstantiatePlanetList(PlanetData.filter((p) => backup.planets.includes(p.id) ))
    
    console.log(gameInstance)
  }

  public load(date: number){
  }


}