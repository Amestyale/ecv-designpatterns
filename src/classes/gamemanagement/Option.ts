import Modifier from "./Modifier/Modifier";

export default class Option{
  private _title: String;
  private _text: String;
  private _modifiers: Array<Modifier>

  constructor(title: String, text: String, modifiers: Array<Modifier>){
    this._title = title
    this._text = text
    this._modifiers = modifiers
  }

  public get title(): String{
    return this._title
  }

  public set title(title: String){
    this._title = title
  }

  public get text(): String{
    return this._text
  }
  
  public set text(text: String){
    this._text = text
  }

  public get modifiers(): Array<Modifier>{
    return this._modifiers
  }
}