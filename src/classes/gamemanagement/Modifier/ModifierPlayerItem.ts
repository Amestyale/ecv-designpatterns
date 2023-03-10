import Player from "../../Player";
import Modifier from "./Modifier";
import ItemPlayer from "../../ItemPlayer";

export default class ModifierPlayerItem extends Modifier {
  private _item: ItemPlayer 
  private _player: Player

  constructor(player: Player, item: ItemPlayer, value: number){
    super(value)
    this._item = item
    this._player = player
  }

  public get item(): ItemPlayer {
    return this._item;
  }

  public set item(item: ItemPlayer){
    this.item = item
  }

  public canBeChoosen(){
    if (this.value < 0) {
      return this._player._inventory.find(item => item.id === this._item.id) !== undefined;
    } else {
      return true
    }
  }

  public apply(){
    if (this.value > 0) {
      this._player.addItem(this._item)
    } else {
      this._player.removeItem(this._item.id)
    }
  }
}