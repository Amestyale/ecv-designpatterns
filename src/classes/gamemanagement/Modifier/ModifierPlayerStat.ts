
import { PlayerDataList } from "../../../types/PlayerStatList";
import Player from "../../Player";
import Modifier from "./Modifier";

export default class ModifierPlayerStat extends Modifier {
  public stat: PlayerDataList 
  public player: Player

  constructor(player: Player, stat: PlayerDataList, value: number){
    super(value)
    this.stat = stat
    this.player = player
  }

  public canBeChoosen(){
    switch(this.stat){
      case PlayerDataList.health:
        return (this.player.health + +this.value) > 0
      case PlayerDataList.money:
        return (this.player.money + +this.value) > 0
    }
  }

  public apply(){
    switch(this.stat){
      case PlayerDataList.health:
        this.player.health = this.player.health + +this.value
        break;
      case PlayerDataList.money:
        this.player.money = this.player.money + +this.value
        break;
    }
  }

}