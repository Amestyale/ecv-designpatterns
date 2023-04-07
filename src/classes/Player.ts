import Race from './Race'
import Ship from './Ship'

class Player {
  public health: number
  public money: number
  private _race: Race

  private _ship: Ship

  constructor(race: Race, money: number, ship: Ship) {
    this._race = race
    this.money = money
    this.health = race.maxHealth
    //TODO Define how inventory work

    this._ship = ship
  }

  public get race() {
    return this._race
  }

  public set race(race: Race) {
    this._race = race
  }

  public get ship() {
    return this._ship
  }

}

export default Player
