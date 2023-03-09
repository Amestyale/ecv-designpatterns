
import { ShipDataList } from "../../../types/ShipStatList";
import Ship from "../../Ship";
import Modifier from "./Modifier";

export default class ModifierShipStat extends Modifier {
  private _stat: ShipDataList 

  constructor(stat: ShipDataList, value: number){
    super(value)
    this._stat = stat
  }

  public get stat(): any {
    return this._stat;
  }

  public set stat(stat: any){
    this.stat = stat
  }

  public canBeChoosen(ship : Ship){
    switch(this._stat){
      case ShipDataList.fuel:
        return (ship.fuel + this.value) > 0
      case ShipDataList.shield:
        return (ship.shield + this.value) > 0
      case ShipDataList.health:
        return (ship.health + this.value) > 0
    }
  }

  public apply(stat: ShipDataList, ship : Ship){
    switch(stat){
      case ShipDataList.fuel:
        ship.fuel += this.value
        break
      case ShipDataList.shield:
        ship.shield += this.value
        break
      case ShipDataList.health:
        ship.health += this.value
        break
    }
  }

}