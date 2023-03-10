
import { PlayerDataList } from "../../../types/PlayerStatList";
import Player from "../../Player";
import Modifier from "./Modifier";

export default class ModifierPlayerStat extends Modifier {
  private _stat: PlayerDataList 
  private _player: Player

  constructor(player: Player, stat: PlayerDataList, value: number){
    super(value)
    this._stat = stat
    this._player = player
  }

  public get stat(): any {
    return this._stat;
  }

  public set stat(stat: any){
    this.stat = stat
  }

  public canBeChoosen(){
    switch(this._stat){
      case PlayerDataList.health:
        return (this._player.health + this.value) > 0
      case PlayerDataList.money:
        return (this._player.money + this.value) > 0
      default:
        return true
    }
  }

  public apply(){
    switch(this.stat){
      case PlayerDataList.health:
        this._player.health = this._player.health + this.value
        break;
      case PlayerDataList.money:
        this._player.money = this._player.money + this._value
        break;
    }
  }

}