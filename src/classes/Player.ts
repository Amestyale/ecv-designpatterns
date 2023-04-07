import Ship from './Ship'

class Player {
  public name: string
  public health: number

  public strenght: number
  public intelligence: number
  public luck: number

  public money: number

  public ship: Ship

  constructor(name: string, health: number, strenght: number, intelligence: number, luck: number, money: number, ship: Ship) {
    this.name = name
    this.health = health

    this.strenght = strenght
    this.intelligence = intelligence
    this.luck = luck

    this.money = money

    this.ship = ship
  }
}

export default Player
