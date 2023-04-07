import EventsData from '../../data/EventsData'
import ModifierCustom from './Modifier/ModifierCustom'
import Option from './Option'
import Planet from '../Planet'
import Player from '../Player'
import Room from '../Room'
import Scenario from '../Scenario'

export default class GameDisplay {
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

  constructor(id: number, name: string, distance: number, player: Player, planetData: any) {
    this.id = id
    this.name = name
    this.distance = distance
    this.player = player
    this.currentPlanet = null

    const scenario = new Scenario(this)
    this.planets = scenario.InstantiatePlanetList(planetData)

    this.inspace = true
    this.inevent = false
    this.canevent = false

    this.currentRoomIndex = -1
  }

  public resolveRoom(option: Option) {
    option.modifiers.map((m) => {
      if (m) m.apply()
    })

    if (this.currentPlanet && this.currentPlanet?.rooms.length > this.currentRoomIndex + 1) {
      this.currentRoomIndex++
    } else {
      this.inspace = true
      this.canevent = true
      this.currentRoomIndex = -1
    }
  }

  public currentRoom(): Room {
    if (this.inevent) {
      const scenario = new Scenario(this)
      this.inevent = false
      return scenario.instanciateRoom(EventsData[0])
    } else if (!this.inspace && this.currentPlanet) {
      return this.currentPlanet?.rooms[0]
    } else {
      const options = this.nextPlanetsAvailables().map((planet: Planet) => {
        const modifier = new ModifierCustom(() => {
          this.player.ship.flying(planet.distanceFrom(this.currentX(), this.currentY()))
          this.currentPlanet = planet
          this.inspace = false
          this.inevent = this.canevent ? Math.random() * 0 + this.player.luck > 10 : false
        })
        const opt = new Option(`Aller sur ${planet.name}`, planet.appearance, [modifier])
        return opt
      })

      return new Room(0, 'Choisir le cap', 'Où voulez-vous aller ?', options, 'buttons')
    }
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

  public isGameWin(): boolean {
    if (this.currentPlanet && this.currentX() >= this.distance) return true
    return false
  }

  public isGameOver(): string {
    if (this.player.health <= 0) {
      return "You are dead !"
    }
    if (this.player.ship.health <= 0) {
      return "Your ship is a wreck !"
    }
    if (this.player.ship.fuel <= 0) {
      return "You are out of fuel !"
    }
    if (this.nextPlanetsAvailables().length === 0) return "You don't have enough fuel and are now stuck on this planet..."
    return "alive"
  }
  public fuel(): number {
    return this.player.ship.fuel;
  }
}
