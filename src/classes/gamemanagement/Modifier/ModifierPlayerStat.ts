
import { PlayerDataList } from "../../../types/PlayerStatList";
import Player from "../../Player";
import Modifier from "./Modifier";

export default class ModifierPlayerStat extends Modifier {
  private _stat: PlayerDataList 

  constructor(stat: PlayerDataList, value: number){
    super(value)
    this._stat = stat
  }

  public get stat(): any {
    return this._stat;
  }

  public set stat(stat: any){
    this.stat = stat
  }

  public canBeChoosen(player : Player){
    switch(this._stat){
      case PlayerDataList.health:
        return (player.health + this.value) > 0
      case PlayerDataList.money:
        return (player.money + this.value) > 0
    }
  }

  public apply(stat: PlayerDataList, player : Player){
    switch(stat){
      case PlayerDataList.health:
        player.health =+ this.value
      case PlayerDataList.money:
        player.money =+ this.value
    }
  }

}