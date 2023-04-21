import Item from './Item'
import Ship from './Ship'

class Player {
  public name: string

  public luck: number
  public money: number
  public health: number

  public items: Array<Item>
  public ship: Ship | null = null

  constructor(name: string, health: number, luck: number, money: number, ship: Ship | null = null) {
    this.name = name

    this.health = health
    this.money = money
    this.luck = luck

    this.ship = ship

    this.items = []
  }
}

export default Player
