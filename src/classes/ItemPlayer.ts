import Item from './Item'
import { PlayerStatList } from '../types/PlayerStatList'

class ItemPlayer extends Item {
  private _stat: [{ name: PlayerStatList; modifier: number }]

  constructor(id: string, title: string, description: string, stat: [{ name: PlayerStatList; modifier: number }], type: string, category: string) {
    super(id, title, description, type, category)

    // {name: 'strenght',modifier: '2'}
    this._stat = stat
  }

  public get stat() {
    return this._stat
  }

  public set stat(stat: [{ name: PlayerStatList; modifier: number }]) {
    this._stat = stat
  }
}

export default ItemPlayer
