class Item {
  private _id: number;
  private _title: string;
  private _description: string;

  constructor(id: number, title: string, description: string) {
    this._id = id;
    this._title = title;
    this._description = description;
  }

  public get id(){
    return this._id;
  }

  public set id(id: number){
    this._id = id;
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