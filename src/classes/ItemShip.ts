import Item from "./Item";
import { ShipStatList } from "../types/ShipStatList";

class ItemShip extends Item {
    private _stat: [{name: ShipStatList, modifier: number}];

  constructor(id: string, title: string, description: string, stat: [{ name: ShipStatList; modifier: number } | null], type: string, category: string) {
    super(id, title, description, type, category)

    this._stat = stat
  }

  public get stat() {
    return this._stat
  }

  public set stat(stat: [{ name: ShipStatList; modifier: number } | null]) {
    this._stat = stat
  }
}

export default ItemShip
