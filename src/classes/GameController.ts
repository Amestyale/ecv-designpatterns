import PlanetData from '../data/PlanetData'
import EventManager from './event/EventManager'
import Option from './gamemanagement/Option'
import Planet from './Planet'
import Player from './Player'
import Room from './Room'
import Scenario from './Scenario'

export default class GameController {
  static gameControllerInstance: GameController

  static getInstance(): GameController{
    if(GameController.gameControllerInstance) return GameController.gameControllerInstance
    else return new GameController(1000)
  }

  public distance: number
  public player: Player | null = null

  public currentPlanet: Planet | null
  public currentRoomIndex: number
  public inspace: boolean
  public inevent: boolean
  public canevent: boolean
  public planets: Planet[]

  public eventManager: EventManager
  public _currentRoom: Room | null = null

  constructor(distance: number) {
    this.distance = distance
    this.currentPlanet = null

    const scenario = new Scenario(this)
    this.planets = scenario.InstantiatePlanetList(PlanetData)

    this.inspace = true
    this.inevent = false
    this.canevent = false

    this.currentRoomIndex = -1

    this.eventManager = new EventManager(this)
    this.eventManager.resolve()
  }

  public resolveRoom(option: Option) {
    option.modifiers.map((m) => {
      if (m) m.apply()
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
    if(!this.player) return []
    const ship = this.player.ship
    return this.planets.filter((planet) => {
      const distance = planet.distanceFrom(this.currentX(), this.currentY())
      return ship.getMaxFlyingDistance() >= distance && this.currentPlanet?.name != planet.name
    })
  }

  public restartGame(): any {
    // this.player = null
  }


}
