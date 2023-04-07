import GameController from '../GameController'
import Room from '../Room'

export default class GameDisplay {
  public gamecontroller: GameController

  constructor(gamecontroller: GameController) {
    this.gamecontroller = gamecontroller
  }

  public currentRoom(): Room | null{
    console.log(this.gamecontroller._currentRoom)
    return this.gamecontroller._currentRoom
  }

  public isGameWin(): boolean {
    if (this.gamecontroller.currentPlanet && this.gamecontroller.currentX() >= this.gamecontroller.distance) return true
    return false
  }

  public isGameOver(): string {
    if (this.gamecontroller.player.health <= 0) {
      return "You are dead !"
    }
    if (this.gamecontroller.player.ship.health <= 0) {
      return "Your ship is a wreck !"
    }
    if (this.gamecontroller.player.ship.fuel <= 0) {
      return "You are out of fuel !"
    }
    if (this.gamecontroller.nextPlanetsAvailables().length === 0) return "You don't have enough fuel and are now stuck on this planet..."
    return "alive"
  }
  public displayFuel(): number {
    return this.gamecontroller.player.ship.fuel;
  }
  public displayHealth(): number {
    return this.gamecontroller.player.health;
  }
  public displayMoney(): number {
    return this.gamecontroller.player.money;
  }
  public displayShipHealth(): number {
    return this.gamecontroller.player.ship.health;
  }
  public displayCurrentPlanetName(): string {
    if (!this.gamecontroller.inspace && this.gamecontroller.currentPlanet) {
      return this.gamecontroller.currentPlanet.name
    }
    return "";
  }
}
