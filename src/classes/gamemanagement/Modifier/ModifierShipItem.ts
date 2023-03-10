import Player from "../../Player";
import Ship from "../../Ship";
import Modifier from "./Modifier";
import ItemShip from "../../ItemShip";

export default class ModifierPlayerItem extends Modifier {
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
    return (this.value) > 0
  }

  public apply(){
    if (this.value > 0) {
      this._ship.addItem(this._item)
    } else {
      this._ship.removeItem(this._item.id)
    }
  }

}