class Race {
  private _name: string;
  private _maxHealth: number;

  private _strenght: number;
  private _intelligence: number;
  private _luck: number;

  constructor(name: string, maxHealth: number, strenght: number, intelligence: number, luck: number) {
    this._name = name;
    this._maxHealth = maxHealth;
    this._strenght = strenght;
    this._intelligence = intelligence;
    this._luck = luck;
  }

  public get name(){
    return this._name;
  }

  public set name(name: string){
    this._name = name;
  }

  public get maxHealth(){
    return this._maxHealth;
  }

  public set maxHealth(maxHealth: number){
    this._maxHealth = maxHealth;
  }

  public get strenght(){
    return this._strenght;
  }

  public set strenght(strenght: number){
    this._strenght = strenght;
  }

  public get intelligence(){
    return this._intelligence;
  }

  public set intelligence(intelligence: number){
    this._intelligence = intelligence;
  }

  public get luck(){
    return this._luck;
  }

  public set luck(luck: number){
    this._luck = luck;
  }
}

export default Race;