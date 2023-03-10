
import { PlayerDataList } from "../../../types/PlayerStatList";
import GameController from "../../GameController";
import Player from "../../Player";
import Modifier from "./Modifier";

export default class ModifierCustom extends Modifier {
  private _callback: Function
  private _gamecontroller: GameController

  constructor(callback: any, gameController: GameController){
    super(0)
    this._callback = callback
    this._gamecontroller = gameController
  }

  public canBeChoosen(){
    return true
  }

  public apply(){
    this._callback(this._gamecontroller)
  }

}