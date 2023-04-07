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
    if (this.gamecontroller.player.ship.fuel <= 0 && this.gamecontroller.inspace) {
      return "You are out of fuel !"
    }
    if (this.gamecontroller.nextPlanetsAvailables().length === 0) return "You don't have enough fuel and are now stuck on this planet..."
    return "alive"
  }
  public displayFuel(): number {
    const fuelPurcent = (this.gamecontroller.player.ship.fuel / this.gamecontroller.player.ship.maxFuel)*100
    return Math.min(100, fuelPurcent);
  }
  public displayHealth(): number {
    // const healthPurcent = (this.gamecontroller.player.health / this.gamecontroller.player.health)*100
    return this.gamecontroller.player.health;
  }
  public displayMoney(): number {
    return this.gamecontroller.player.money;
  }
  public displayShipHealth(): number {
    const healthPurcent = (this.gamecontroller.player.ship.health / this.gamecontroller.player.ship.maxHealth)*100
    return Math.min(100, healthPurcent);
  }
  public displayCurrentLocationInfo(): { name: string, description: string } {
    const location = {
        name: "Dans l'espace",
        description: ""
    };
    if (!this.gamecontroller.inspace && this.gamecontroller.currentPlanet) {
      location.name = this.gamecontroller.currentPlanet.name;
      location.description = this.gamecontroller.currentPlanet.description;
    }
    return location;
  }
}
