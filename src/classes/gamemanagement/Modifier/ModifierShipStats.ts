
import { ShipDataList } from "../../../types/ShipStatList";
import GameController from "../../GameController";
import Modifier from "./Modifier";

export default class ModifierShipStat extends Modifier {
  public stat: ShipDataList 

  constructor(stat: ShipDataList, value: number){
    super(value)
    this.stat = stat
  }

  public canBeChoosen(){
    const ship = GameController.getInstance().player?.ship
    if(!ship) return false

    switch(this.stat){
      case ShipDataList.fuel:
        return (ship.fuel + +this.value) > 0
      case ShipDataList.health:
        return (ship.health + +this.value) > 0
    }
  }

  public apply(){
    const ship = GameController.getInstance().player?.ship
    if(!ship) return false

    switch(this.stat){
      case ShipDataList.fuel:
        ship.fuel += +this.value
        break
      // case ShipDataList.shield:
      //   this.ship.shield += +this.value
      //   break
      case ShipDataList.health:
        ship.health += +this.value
        break
    }
  }

}