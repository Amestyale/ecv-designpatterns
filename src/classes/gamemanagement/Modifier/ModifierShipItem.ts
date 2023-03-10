import Ship from "../../Ship";
import Modifier from "./Modifier";
import ItemShip from "../../ItemShip";

export default class ModifierShipItem extends Modifier {
  private _item: ItemShip 
  private _ship: Ship

  constructor(ship: Ship, item: ItemShip, value: number){
    super(value)
    this._item = item
    this._ship = ship
  }

  public get item(): ItemShip {
    return this._item;
  }

  public set item(item: ItemShip){
    this.item = item
  }

  public canBeChoosen(){
    if (this.value < 0) {
      return this._ship._items.find(item => item && item.id === this._item.id) !== undefined;
    } else {
      return true
    }
  }

  public apply(){
    if (this.value > 0) {
      this._ship.addItem(this._item)
    } else {
      this._ship.removeItem(this._item.id)
    }
  }
}