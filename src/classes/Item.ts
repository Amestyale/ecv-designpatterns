class Item {
  private _id: string;
  private _title: string;
  private _description: string;
  
  private _type: string;
  private _category: string;

  constructor(id: string, title: string, description: string, type: string, category: string) {
    this._id = id;
    this._title = title;
    this._description = description;

    // Either Object or Effect
    this._type = type;

    // Can be shoes or helmet or weapon or whatever
    this._category = category;
  }

  public get id(){
    return this._id;
  }

  public set id(id: string){
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

  public get type(){
    return this._type;
  }

  public set type(type: string){
    this._type = type;
  }

  public get category(){
    return this._category;
  }

  public set category(category: string){
    this._category = category;
  }
}

export default Item;