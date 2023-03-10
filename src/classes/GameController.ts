import { PlayerDataList } from '../types/PlayerStatList'
import ModifierCustom from './gamemanagement/Modifier/ModifierCustom'
import ModifierPlayerStat from './gamemanagement/Modifier/ModifierPlayerStat'
import Option from './gamemanagement/Option'
import Planet from './Planet'
import Room from './Room'
import Scenario from './Scenario'

export default class GameController {
  private _id: number
  private _name: string
  private _distance: number
  private _player: any

  private _currentPlanet: Planet | null
  private _currentRoomIndex: number
  private _inspace: boolean
  private _planets: Planet[]

  constructor(id: number, name: string, distance: number, player: any, planetData: any) {
    this._id = id
    this._name = name
    this._distance = distance
    this._player = player
    this._currentPlanet = null

    const scenario =  new Scenario(planetData, this)
    this._planets = scenario.planets
    this._inspace = true

    this._currentRoomIndex = -1
  }

  get id(): number {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get distance(): number {
    return this._distance
  }

  get player(): any {
    return this._player
  }

  get currentPlanet(): Planet | null {
    return this._currentPlanet
  }

  get inSpace(): boolean {
    return this._inspace
  }

  set inSpace(inspace: boolean) {
    this._inspace = inspace
  }
  set currentPlanet(planet: Planet | null) {
    this._currentPlanet = planet
  }

  public resolveRoom(option: Option) {
    option.modifiers.map((m) => {
      if(m) m.apply()
    })

    if(this.currentPlanet && this.currentPlanet?.rooms.length > this._currentRoomIndex + 1){
      this._currentRoomIndex++
    } else {
      this._inspace = true
      this._currentRoomIndex = -1
    }
    
  }

  public currentRoom(): Room {
    if (!this.inSpace && this.currentPlanet) return this.currentPlanet?.rooms[this._currentRoomIndex]
    else {
      const options = this.nextPlanetsAvailables().map((planet: Planet) => {
        const modifier = new ModifierCustom((gameController: GameController) => {
          this.currentPlanet = planet
          this.inSpace = false
        })
        const opt = new Option(`Aller sur ${planet.name}`, planet.appearance, [modifier])
        return opt
      })

      return new Room(0, 'Choisir le cap', 'Où voulez-vous aller ?', options, 'buttons')
    }
  }

  public nextPlanetsAvailables(): Array<Planet> {
    const currentX = this._currentPlanet ? this._currentPlanet.x : 0
    const currentY = this._currentPlanet ? this._currentPlanet.y : 0
    const ship = this.player.ship
    return this._planets.filter((planet) => {
      const distance = planet.distanceFrom(currentX, currentY)
      return ship.getMaxFlyingDistance() >= distance
    })
  }
}
