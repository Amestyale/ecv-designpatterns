
import { PlayerDataList } from "../../../types/PlayerStatList";
import GameController from "../../GameController";
import Player from "../../Player";
import Modifier from "./Modifier";

export default class ModifierPlayerStat extends Modifier {
  public stat: PlayerDataList 
  
  constructor(stat: PlayerDataList, value: number){
    super(value)
    this.stat = stat
  }

  public canBeChoosen(){
    const player = GameController.getInstance().player
    if(!player) return false

    switch(this.stat){
      case PlayerDataList.health:
        return (player.health + +this.value) > 0
      case PlayerDataList.money:
        return (player.money + +this.value) > 0
    }
  }

  public apply(){
    const player = GameController.getInstance().player
    if(!player) return false

    switch(this.stat){
      case PlayerDataList.health:
        player.health = player.health + +this.value
        break;
      case PlayerDataList.money:
        player.money = player.money + +this.value
        break;
    }
  }

}