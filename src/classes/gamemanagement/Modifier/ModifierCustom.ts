
import { PlayerDataList } from "../../../types/PlayerStatList";
import Player from "../../Player";
import Modifier from "./Modifier";

export default class ModifierCustom extends Modifier {
  private _callback: Function

  constructor(callback: any){
    super(0)
    this._callback = callback
  }

  public canBeChoosen(){
    return true
  }

  public apply(){
    this._callback()
  }

}