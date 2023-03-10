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
    switch(this._item){
      case ItemPlayer.id:
        return (this._item.id + this.value) > "0"
    }
  }

  public apply(){
    this._player.addItem(this._item)
  }

}