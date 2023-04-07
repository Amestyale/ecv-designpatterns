import Modifier from "./Modifier";

export default class ModifierCustom extends Modifier {
  private callback: Function

  constructor(callback: any){
    super(0)
    this.callback = callback
  }

  public canBeChoosen(){
    return true
  }

  public apply(){
    this.callback()
  }

}