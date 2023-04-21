import Room from './Room'

export default class Planet {
  public id : number
  public name: string
  public description: string
  public appearance: string
  public rooms: Room[]
  public x: number
  public y: number

  constructor(id: number, x: number, y: number, name: string, description: string, appearance: string, rooms: Room[]) {
    this.id = id
    this.x = x
    this.y = y
    this.name = name
    this.description = description
    this.appearance = appearance
    this.rooms = rooms
  }

  public distanceFrom(x: number, y: number): number {
    return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2))
  }
}
