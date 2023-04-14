import EventManager from './event/EventManager'
import Option from './gamemanagement/Option'
import Planet from './Planet'
import Player from './Player'
import Room from './Room'
import Scenario from './Scenario'

export default class GameController {
  public id: number
  public name: string
  public distance: number
  public player: Player

  public currentPlanet: Planet | null
  public currentRoomIndex: number
  public inspace: boolean
  public inevent: boolean
  public canevent: boolean
  public planets: Planet[]

  public log: String

  public eventManager: EventManager
  public _currentRoom: Room | null = null

  constructor(id: number, name: string, distance: number, player: Player, planetData: any, log: String) {
    this.id = id
    this.name = name
    this.distance = distance
    this.player = player
    this.currentPlanet = null

    this.log = "Vous commencez votre aventure";

    const scenario = new Scenario(this)
    this.planets = scenario.InstantiatePlanetList(planetData)

    this.inspace = true
    this.inevent = false
    this.canevent = false

    this.currentRoomIndex = -1

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

          if(m.stat){
            switch(m.stat) { 
                case "money": { 
                  this.log += " unités d'argent"
                  break; 
                } 
                case "health": { 
                  this.log += " points de vie"
                  break; 
                } 
                case "shield": { 
                  this.log += " points de bouclier"
                  break; 
                } 
                case "fuel": { 
                  this.log += " unités de fuel"
                  break; 
                } 
                default: { 
                  break; 
                } 
              }  
            }else{
              this.log += " "+m.item.name
            }

        }
        
        console.log(this.log)
        m.apply()
      }
    })

    this.eventManager.resolve()
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
    const ship = this.player.ship
    return this.planets.filter((planet) => {
      const distance = planet.distanceFrom(this.currentX(), this.currentY())
      return ship.getMaxFlyingDistance() >= distance && this.currentPlanet?.name != planet.name
    })
  }

}
