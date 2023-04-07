import EventsData from '../../data/EventsData'
import ModifierCustom from './Modifier/ModifierCustom'
import Option from './Option'
import Planet from '../Planet'
import Player from '../Player'
import GameController from '../GameController'
import Room from '../Room'
import Scenario from '../Scenario'

export default class GameDisplay {
  public id: number
  public name: string
  public distance: number
  public player: Player
  public gamecontroller: GameController

  public currentPlanet: Planet | null
  public currentRoomIndex: number
  public inspace: boolean
  public inevent: boolean
  public canevent: boolean
  public planets: Planet[]

  constructor(id: number, name: string, distance: number, player: Player, planetData: any, gamecontroller: GameController) {
    this.id = id
    this.name = name
    this.distance = distance
    this.player = player
    this.currentPlanet = null
    this.gamecontroller = gamecontroller

    const scenario = new Scenario(this)
    this.planets = scenario.InstantiatePlanetList(planetData)

    this.inspace = true
    this.inevent = false
    this.canevent = false

    this.currentRoomIndex = -1
  }

  public isGameWin(): boolean {
    if (this.currentPlanet && this.gamecontroller.currentX() >= this.distance) return true
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
    if (this.gamecontroller.nextPlanetsAvailables().length === 0) return "You don't have enough fuel and are now stuck on this planet..."
    return "alive"
  }
  public displayFuel(): number {
    return this.player.ship.fuel;
  }
  public displayHealth(): number {
    return this.player.health;
  }
  public displayMoney(): number {
    return this.player.money;
  }
  public displayShipHealth(): number {
    return this.player.ship.health;
  }
  public displayCurrentPlanetName(): string {
    if (!this.inspace && this.currentPlanet) {
      return this.currentPlanet.name
    }
    return "";
  }
}
