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

  public isGameOver(): string | false {
    if (this.gamecontroller.player && this.gamecontroller.player.ship) {
      if (this.gamecontroller.player.health <= 0) {
        return "You are dead !"
      }
      if (this.gamecontroller.player.ship.health <= 0) {
        return "Your ship is a wreck !"
      }
    }
   
    if (this.gamecontroller.nextPlanetsAvailables().length === 0 && this.gamecontroller.inspace) return "You don't have enough fuel and are now stuck on this planet..."
    return false
  }
  public displayFuel(): number {
    var fuelPurcent = 0
    if (this.gamecontroller.player && this.gamecontroller.player.ship) {
      const fuelPurcentValue = (this.gamecontroller.player.ship.fuel / this.gamecontroller.player.ship.maxFuel)*100
      fuelPurcent =  Math.min(100, fuelPurcentValue);
    }
    return fuelPurcent
    
  }
  public displayHealth(): number {
    // const healthPurcent = (this.gamecontroller.player.health / this.gamecontroller.player.health)*100
    return this.gamecontroller.player ? this.gamecontroller.player.health : 0; 
  }
  public displayMoney(): number {
    return this.gamecontroller.player ? this.gamecontroller.player.money : 0;
  }
  public displayShipHealth(): number {
    const healthPurcent = this.gamecontroller.player && this.gamecontroller.player.ship ? (this.gamecontroller.player.ship.health / this.gamecontroller.player.ship.maxHealth)*100 : 0
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
