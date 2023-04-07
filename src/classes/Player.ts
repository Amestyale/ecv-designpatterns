import Race from './Race'
import Ship from './Ship'

class Player {
  public health: number
  public money: number
  public race: Race

  public ship: Ship

  constructor(race: Race, money: number, ship: Ship) {
    this.race = race
    this.money = money
    this.health = race.maxHealth
    this.ship = ship
  }
  

}

export default Player
