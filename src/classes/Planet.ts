import Room from './Room'

export default class Planet {
  private _name: string
  private _description: string
  private _appearance: string
  private _rooms: Room[]
  private _x: number
  private _y: number

  constructor(x: number, y: number, name: string, description: string, appearance: string, rooms: Room[]) {
    this._x = x
    this._y = y
    this._name = name
    this._description = description
    this._appearance = appearance
    this._rooms = rooms
  }

  get x(): number {
    return this._x
  }

  get y(): number {
    return this._y
  }

  get name(): string {
    return this._name
  }

  get description(): string {
    return this._description
  }

  get appearance(): string {
    return this._appearance
  }

  get rooms(): Room[] {
    return this._rooms
  }

  public distanceFrom(x: number, y: number): number {
    return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2))
  }
}
