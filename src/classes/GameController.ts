import ModifierCustom from "./gamemanagement/Modifier/ModifierCustom"
import Option from "./gamemanagement/Option"
import Planet from "./Planet"
import Room from "./Room"

export default class GameController {
  private _id: number
  private _name: string
  private _distance: number
  private _player: any

  private _currentPlanet: Planet | null;
  private _inspace: Boolean;
  private _planets: Planet[];

  constructor(id: number, name: string, distance: number, player: any, planets: Planet[]) {
    this._id = id
    this._name = name
    this._distance = distance
    this._player = player
    this._currentPlanet = null
    this._planets = planets
    this._inspace = true
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

  get inSpace(): Boolean {
    return this._inspace
  }


  set inSpace(inspace: Boolean) {
    this._inspace = inspace
  }
  set currentPlanet(planet: Planet | null) {
    this._currentPlanet = planet
  }
  
  public currentRoom(): Room {
    console.log("building cap", this.inSpace, this.currentPlanet)
    if(!this.inSpace && this.currentPlanet) return this.currentPlanet?.rooms[0]
    else {
      const options = this.nextPlanetsAvailables().map((planet: Planet)=>{ 
        const modifier = new ModifierCustom((gameController: GameController) => {
          gameController.currentPlanet = planet
          gameController.inSpace = false
        }, this)
        const opt = new Option(`Aller sur ${planet.name}`, planet.appearance, [modifier])
        return opt
      })
      
      return new Room(0, "Choisir le cap", "Où voulez-vous aller ?", options, "buttons")
    }
  }
  public nextPlanetsAvailables() : Array<Planet> {
    const currentX = (this._currentPlanet) ? this._currentPlanet.x : 0
    const currentY = (this._currentPlanet) ? this._currentPlanet.y : 0
    const ship = this.player.ship;
    return this._planets.filter((planet)=>{
      const distance = planet.distanceFrom(currentX, currentY)
      return true // ship.getMaxFlyingDistance() <= distance
    })
  }

}
