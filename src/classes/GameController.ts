import PlanetData from '../data/PlanetData'
import EventManager from './event/EventManager'
import { BackupPlayer, BackupShip, BackupItem, BackupGame } from './gamemanagement/BackupTypes'
import ModifierPlayerItem from './gamemanagement/Modifier/ModifierPlayerItem'
import ModifierPlayerStat from './gamemanagement/Modifier/ModifierPlayerStat'
import ModifierShipStat from './gamemanagement/Modifier/ModifierShipStats'
import Option from './gamemanagement/Option'
import Planet from './Planet'
import Player from './Player'
import Room from './Room'
import Scenario from './Scenario'

export default class GameController {
  static gameControllerInstance: GameController

  static getInstance(): GameController{
    if(!GameController.gameControllerInstance)  {
      GameController.gameControllerInstance = new GameController(1000)
    }
    return GameController.gameControllerInstance
  }

  public distance: number
  public player: Player | null = null

  public currentPlanet: Planet | null
  public currentRoomIndex: number
  public inspace: boolean
  public inevent: boolean
  public canevent: boolean
  public planets: Planet[]

  public log: String

  public eventManager: EventManager | null = null

  public _currentRoom: Room | null = null

  constructor(distance: number) {
    this.distance = distance
    this.currentPlanet = null

    this.log = "Vous commencez votre aventure";

    const scenario = new Scenario(this)
    this.planets = scenario.InstantiatePlanetList(PlanetData)

    this.inspace = true
    this.inevent = false
    this.canevent = false

    this.currentRoomIndex = -1
  }

  public start(){

    this.eventManager = new EventManager(this)
    this.eventManager.resolve()

  }
  public resolveRoom(option: Option) {
    option.modifiers.map((m) => {
      if (m){
        if(m.value != 0){
          if(m.value > 0){
            this.log += ";Vous gagnez "+m.value
          }else{
            this.log += ";Vous perdez "+m.value
          }

          if(m instanceof ModifierPlayerStat){
            switch(m.stat) { 
                case "money": { 
                  this.log += " unités d'argent"
                  break; 
                } 
                case "health": { 
                  this.log += " points de vie"
                  break; 
                } 
                default: { 
                  break; 
                } 
              }  
            } else if(m instanceof ModifierShipStat){
              switch(m.stat) { 
                case "shield": { 
                  this.log += " points de bouclier"
                  break; 
                } 
                case "fuel": { 
                  this.log += " unités de fuel"
                  break; 
                } 
              }

            } else if(m instanceof ModifierPlayerItem){
              this.log += " "+m.item.name
            }

        }
        
        console.log(this.log)
        m.apply()
      }
    })

    if(this.eventManager)this.eventManager.resolve()
  }

  public currentRoom(){
    return this._currentRoom
  }

  public currentX(): number {
    return this.currentPlanet ? this.currentPlanet.x : 0
  }
  public currentY(): number {
    return this.currentPlanet ? this.currentPlanet.y : 0
  }

  public distanceFromWin(): number {
    return this.distance - this.currentX()
  }

  public nextPlanetsAvailables(): Array<Planet> {
    if(!this.player) return []
    const ship = this.player.ship
    return this.planets.filter((planet) => {
      const distance = planet.distanceFrom(this.currentX(), this.currentY())
      if (ship) {
        return ship.getMaxFlyingDistance() >= distance && this.currentPlanet?.name != planet.name
      } else {
        return false
      }
    })
  }

  public restartGame() {
   // if (this.player && this.player.ship) {
   //   this.player.ship = null
   //   this.player = null
   // }
  }

  public savePlayer() : any {
    if(!this.player){
      return null;
    }

    let itemList: Array<BackupItem> = [];

    this.player.items.forEach( (value)=>{
      itemList.push(this.saveItem(value));
    }); 

    let backup : BackupPlayer = {
      luck: this.player?.luck,
      money: this.player?.money,
      health: this.player?.health,
      ship: this.saveShip(),
      items: itemList,
    };

    return backup;
  }

  public saveShip() : any {
    if(!this.player?.ship){
      return null;
    }

    let backup : BackupShip = {
      name: this.player?.ship.name,
      fuel: this.player?.ship.fuel,
      maxFuel: this.player?.ship.maxFuel,
      health: this.player?.ship.health,
      maxHealth: this.player?.ship.maxHealth,
    };

    return backup;
  }

  public saveItem(item : any) : any {
    if(!item){
      return null;
    }

    let backup : BackupItem = {
      id: item.id,
      name: item.name,
      description: item.description,
      image: item.image,
    };

    return backup;
  }


  public saveGame() : BackupGame {
    return {
      planets : this.planets.map(p => p.id),
      player: this.savePlayer(),
      currentRoomIndex : this.currentRoomIndex,
      
      currentPlanet: this.currentPlanet?.id,
      inspace: this.inspace,
      inevent: this.inevent,
      canevent: this.canevent,

      log: this.log,
      distance: this.distance,
    }
  }

}
