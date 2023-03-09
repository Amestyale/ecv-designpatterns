import Planet from './Planet'

export default class Chapter {
  private _id: number
  private _x: number
  private _y: number
  private _planet: Planet

  constructor(id: number, x: number, y: number, planet: Planet) {
    this._id = id
    this._x = x
    this._y = y
    this._planet = planet
  }

  get id(): number {
    return this._id
  }

  get x(): number {
    return this._x
  }

  get y(): number {
    return this._y
  }

  get planet(): Planet {
    return this._planet
  }
}
