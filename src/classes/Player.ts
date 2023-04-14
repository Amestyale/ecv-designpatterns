import Item from './Item'
import Ship from './Ship'

class Player {
  public name: string

  public luck: number
  public money: number
  public health: number

  public ship: Ship
  public items: Array<Item>

  constructor(name: string, health: number, luck: number, money: number, ship: Ship) {
    this.name = name

    this.health = health
    this.money = money
    this.luck = luck

    this.ship = ship
    
    this.items = []
  }
}

export default Player
