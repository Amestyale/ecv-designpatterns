import MapPlanet from '../../interfaces/MapPlanet'
import GameController from '../GameController'
import Item from '../Item'
import Planet from '../Planet'
import Room from '../Room'

export default class GameDisplay {
  public gamecontroller: GameController

  constructor(gamecontroller: GameController) {
    this.gamecontroller = gamecontroller
  }
  

  public currentRoom(): Room | null{
    return this.gamecontroller._currentRoom
  }

  public isGameWin(): boolean {
    if (this.gamecontroller.currentPlanet && this.gamecontroller.currentX() >= this.gamecontroller.distance) return true
    return false
  }

  public isGameOver(): string | false {
    if (this.gamecontroller.player && this.gamecontroller.player.ship) {
      if (this.gamecontroller.player.health <= 0) {
        return "Vous êtes mort, votre corps alimente désormais le compost d'un spatio-agriculteur"
      }
      if (this.gamecontroller.player.ship.health <= 0) {
        return "Votre vaisseau a fini en pièces détachées... et vous avec"
      }
    }
   
    if (this.gamecontroller.nextPlanetsAvailables().length === 0 && this.gamecontroller.inspace) return "Vous n'avez plus assez d'essence et êtes désormais coincé sur cette planète jusqu'à ce que mort ou folie s'ensuive"
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

  public currentInventory(): Array<Item>{
    return (this.gamecontroller.player) ? this.gamecontroller.player.items : []
  }

  public mapPlanetsMaxX(): number{
    const planets = this.gamecontroller.planets
    planets.sort((a,b)=> (a.x > b.x) ? -1 : 1 )
    return planets[0].x + (planets[0].x/10)
  }
  public mapPlanets(): Array<MapPlanet>{
    const maxX = this.mapPlanetsMaxX()

    return this.gamecontroller.planets.map((planet)=>{
      return {
        left: planet.x / maxX * 100,
        name: planet.name,
        current: this.gamecontroller.currentPlanet == planet
      }
    })
  }
  public mapFinishX(): number{
    return this.gamecontroller.distance / this.mapPlanetsMaxX() * 100
  }
}
