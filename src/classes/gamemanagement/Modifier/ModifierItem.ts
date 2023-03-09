import Modifier from "./Modifier";

export default abstract class ModifierItem extends Modifier {
  private _item: any // TODO change type

  constructor(value: number){
    super(value)
  }

  public get item(): any {
    return this._item;
  }

  public set item(item: any){
    this.item = item
  }

}