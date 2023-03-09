import Modifier from "./Modifier";

export default abstract class Modifierstat extends Modifier {
  private _stat: any // TODO change type

  constructor(value: number){
    super(value)
  }

  public get stat(): any {
    return this._stat;
  }

  public set stat(stat: any){
    this.stat = stat
  }

}