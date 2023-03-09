class Item {
  private _title: string;
  private _description: string;

  constructor(title: string, description: string) {
    this._title = title;
    this._description = description;
  }

  public get title(){
    return this._title;
  }

  public set title(title: string){
    this._title = title;
  }

  public get description(){
    return this._description;
  }

  public set description(description: string){
    this._description = description;
  }
}

export default Item;