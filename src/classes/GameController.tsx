import Planet from "./Planet"

export default class GameController {
  private _id: number
  private _name: string
  private _distance: number
  private _player: any

  private _currentPlanet: Planet | null;
  private _inspace: boolean;
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

  get inSpace(): boolean {
    return this._inspace
  }

  set currentPlanet(planet: Planet | null) {
    this._currentPlanet = planet
  }

  public nextPlanetsAvailables() : Array<Planet> {
    const currentX = (this._currentPlanet) ? this._currentPlanet.x : 0
    const currentY = (this._currentPlanet) ? this._currentPlanet.y : 0
    const ship = this.player.ship;
    return this._planets.filter((planet)=>{
      const distance = planet.distanceFrom(currentX, currentY)
      return ship.getMaxFlyingDistance() <= distance
    })
  }

}
