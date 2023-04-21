import GameController from "../GameController"
import Player from "../Player"
import Ship from "../Ship"
import { BackupPlayer, BackupShip } from "./BackupTypes"
import Planet from "../Planet"
import { BackupGame } from "./BackupTypes"
import Scenario from '../Scenario'
import PlanetData from "../../data/PlanetData"


class Backup {
  public date: number
  public data: any

  constructor(data: any){
    this.date = Date.now()
    this.data = data
  }
}
export default class BackupManager {
  
  public save() {
    const data = GameController.getInstance().saveGame()
    const backup = new Backup(data)

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
    gameInstance._currentRoom = backup.currentRoomIndex
    gameInstance.log = backup.log
    gameInstance.distance = backup.distance

    gameInstance.planets = scenario.InstantiatePlanetList(PlanetData.filter((p) => backup.planets.includes(p.id) ))
    if(backup.currentPlanet){
      const planet = gameInstance.planets.find(p => p.id == backup.currentPlanet)
      if(planet) gameInstance.currentPlanet = planet
    }

    if(backup.player){
      gameInstance.player = this.loadPlayer(backup.player)
    }

    gameInstance.start()

    GameController.gameControllerInstance = gameInstance
  }

  public loadPlayer(backupPlayer : BackupPlayer) : Player{
    let newShip = this.loadShip(backupPlayer.ship);

    let newPlayer = new Player('player', backupPlayer.health, backupPlayer.luck, backupPlayer.money, newShip);

    backupPlayer.items.forEach(element => {
      newPlayer.items.push(element);
    }); 

    return newPlayer;
  }

  public loadShip(backupShip : BackupShip) : Ship{

    let newShip = new Ship(backupShip.name, backupShip.fuel, backupShip.health, backupShip.maxFuel, backupShip.maxHealth);

    return newShip;
  }

}