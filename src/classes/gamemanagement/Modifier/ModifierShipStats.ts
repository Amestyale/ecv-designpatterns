
import { ShipDataList } from "../../../types/ShipStatList";
import Ship from "../../Ship";
import Modifier from "./Modifier";

export default class ModifierShipStat extends Modifier {
  private stat: ShipDataList 
  private ship: Ship 

  constructor(ship: Ship, stat: ShipDataList, value: number){
    super(value)
    this.stat = stat
    this.ship = ship
  }

  public canBeChoosen(){
    switch(this.stat){
      case ShipDataList.fuel:
        return (this.ship.fuel + +this.value) > 0
      case ShipDataList.shield:
        return (this.ship.shield + +this.value) > 0
      case ShipDataList.health:
        return (this.ship.health + +this.value) > 0
    }
  }

  public apply(){
    switch(this.stat){
      case ShipDataList.fuel:
        this.ship.fuel += +this.value
        break
      case ShipDataList.shield:
        this.ship.shield += +this.value
        break
      case ShipDataList.health:
        this.ship.health += +this.value
        break
    }
  }

}