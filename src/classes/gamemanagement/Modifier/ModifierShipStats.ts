
import { ShipDataList } from "../../../types/ShipStatList";
import Ship from "../../Ship";
import Modifier from "./Modifier";

export default class ModifierShipStat extends Modifier {
  private _stat: ShipDataList 
  private _ship: Ship 

  constructor(ship: Ship, stat: ShipDataList, value: number){
    super(value)
    this._stat = stat
    this._ship = ship
  }

  public get stat(): any {
    return this._stat;
  }

  public set stat(stat: any){
    this.stat = stat
  }

  public canBeChoosen(){
    switch(this._stat){
      case ShipDataList.fuel:
        return (this._ship.fuel + +this.value) > 0
      case ShipDataList.shield:
        return (this._ship.shield + +this.value) > 0
      case ShipDataList.health:
        return (this._ship.health + +this.value) > 0
    }
  }

  public apply(){
    switch(this._stat){
      case ShipDataList.fuel:
        this._ship.fuel += +this.value
        break
      case ShipDataList.shield:
        this._ship.shield += +this.value
        break
      case ShipDataList.health:
        this._ship.health += +this.value
        break
    }
  }

}