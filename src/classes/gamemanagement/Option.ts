export default class Option{
  private _title: String;
  private _text: String;

  constructor(title: String, text: String){
    this._title = title
    this._text = text
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

}