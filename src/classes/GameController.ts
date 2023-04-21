import PlanetData from '../data/PlanetData'
import EventManager from './event/EventManager'
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


  public isActive(option: Option): boolean {
    console.log(option)
    return option.modifiers.every((m) =>  m.canBeChoosen())
  }

  public resolveRoom(option: Option) {
    option.modifiers.map((m) => {
      if (m)
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


}
