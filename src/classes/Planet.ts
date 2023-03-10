import Room from './Room'

export default class Planet {
  private _id: number
  private _name: string
  private _description: string
  private _appearance: string
  private _rooms: Room[]

  constructor(id: number, name: string, description: string, appearance: string, rooms: Room[]) {
    this._id = id
    this._name = name
    this._description = description
    this._appearance = appearance
    this._rooms = rooms
  }

  get id(): number {
    return this._id
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
}
