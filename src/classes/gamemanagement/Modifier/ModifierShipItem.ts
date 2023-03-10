import Player from "../../Player";
import Modifier from "./Modifier";
import ItemShip from "../../ItemShip";

export default class ModifierPlayerItem extends Modifier {
  private _item: ItemShip 
  private _player: Player

  constructor(player: Player, item: ItemShip, value: number){
    super(value)
    this._item = item
    this._player = player
  }

  public get item(): ItemShip {
    return this._item;
  }

  public set item(item: ItemShip){
    this.item = item
  }

  public canBeChoosen(){

  }

  public apply(){
    this._player.addItem(this._item)
  }

}