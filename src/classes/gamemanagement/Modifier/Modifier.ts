export default abstract class Modifier {
  protected _value: number;

  constructor(value: number){
    this._value = value
  }

  public get value(): number{
    return this._value
  }

  public set value(value: number){
    this._value = value
  }

  public apply(){
  }

}