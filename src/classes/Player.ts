import ItemPlayer from "./ItemPlayer";
import Race from "./Race";

class Player {
  private _health: number;
  private _money: number;
  private _race: Race;

  private _inventory: [ItemPlayer];

  constructor(health: number, money: number, race: Race, inventory: [ItemPlayer]) {
    this._health = health;
    this._money = money;
    this._race = race;

    //TODO Define how inventory work
    this._inventory = inventory;
  }
 
  public get health(){
    return this._health;
  }

  public set health(health: number){
    this._health = health;
  }

  public get money(){
    return this._money;
  }

  public set money(money: number){
    this._money = money;
  }

  public get race(){
    return this._race;
  }

  public set race(race: Race){
    this._race = race;
  }

  public get inventory(){
    return this._inventory;
  }

  public set inventory(inventory: [ItemPlayer]){
    this._inventory = inventory;
  }
}

export default Player;