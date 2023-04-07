import Ship from './Ship'

class Player {
  public name: string

  public luck: number
  public money: number
  public health: number

  public ship: Ship

  constructor(name: string, health: number, luck: number, money: number, ship: Ship) {
    this.name = name

    this.health = health
    this.money = money
    this.luck = luck

    this.ship = ship
  }
}

export default Player
