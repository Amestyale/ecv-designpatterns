export default class Game {
  private _id: number
  private _name: string
  private _distance: string
  private _player: any

  constructor(id: number, name: string, distance: string, player: any) {
    this._id = id
    this._name = name
    this._distance = distance
    this._player = player
  }

  get id(): number {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get distance(): string {
    return this._distance
  }

  get player(): any {
    return this._player
  }
}
