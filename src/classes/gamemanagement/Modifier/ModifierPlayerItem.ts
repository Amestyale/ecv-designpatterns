
import { ShipDataList } from "../../../types/ShipStatList";
import GameController from "../../GameController";
import Item from "../../Item";
import Player from "../../Player";
import Modifier from "./Modifier";

export default class ModifierPlayerItem extends Modifier {
  public item: Item 

  constructor(item: Item, value = 1){
    super(value)
    this.item = item
  }

  public canBeChoosen(){
     return true
  }

  public apply(){
    const player = GameController.getInstance().player
    if(!player) return null
    if(this.value >= 1){
      player.items.push(this.item)
    } else {
      const index = player.items.findIndex((item)=>{
        return item.id == this.item.id
      })
      if(index >= 0){
        player.items.splice(index, 1)
      }
    }
  }

}