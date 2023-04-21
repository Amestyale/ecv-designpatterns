
import { ShipDataList } from "../../../types/ShipStatList";
import GameController from "../../GameController";
import Item from "../../Item";
import Player from "../../Player";
import Modifier from "./Modifier";
import ItemsData from "../../../data/ItemsData";

export default class ModifierPlayerItem extends Modifier {
  public item: Item | null = null

  constructor(id: String, value = 1){
    super(value)

    const dataItem = ItemsData.find((element) => {
      return element.id === id;
    });

    if(dataItem){
      this.item = new Item(dataItem?.id, dataItem?.title, dataItem?.description);
    }

  }

  public canBeChoosen(){
     return true
  }

  public apply(){
    const player = GameController.getInstance().player
    if(!player) return null
    if(!this.item) return null 
    if(this.value >= 1){
      player.items.push(this.item)
    } else {
      const index = player.items.findIndex((item)=>{
        return (this.item?.id) ? item.id == this.item.id : false
      })
      if(index >= 0){
        player.items.splice(index, 1)
      }
    }
  }

}