
import { PlayerStatList } from "../../../types/PlayerStatList";
import Player from "../../Player";
import Modifier from "./Modifier";

export default class ModifierSkillCheck extends Modifier {
  private _stat: PlayerStatList 
  private _player: Player

  //stat : the stat that needs to be checked
  //value : the minimum the player need to hit in order to suceed
  constructor(player: Player, stat: PlayerStatList, value: number){
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