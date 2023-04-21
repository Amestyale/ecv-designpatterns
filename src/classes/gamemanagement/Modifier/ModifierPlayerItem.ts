
import { ShipDataList } from "../../../types/ShipStatList";
import Item from "../../Item";
import Player from "../../Player";
import Modifier from "./Modifier";

export default class ModifierPlayerItem extends Modifier {
  public item: Item 
  public player: Player

  constructor(player: Player, item: Item, value = 1){
    super(value)
    this.player = player
    this.item = item
  }

  public canBeChoosen(){
     return true
  }

  public apply(){
    if(this.value >= 1){
      this.player.items.push(this.item)
    } else {
      const index = this.player.items.findIndex((item)=>{
        return item.id == this.item.id
      })
      if(index >= 0){
        this.player.items.splice(index, 1)
      }
    }
  }

}