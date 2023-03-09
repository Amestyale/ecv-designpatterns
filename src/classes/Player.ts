import ItemPlayer from "./ItemPlayer";
import Race from "./Race";

class Player {
  private _health: number;
  private _money: number;
  private _race: Race;
  private _strenght: number;
  private _intelligence: number;
  private _luck: number;

  private _inventory: [ItemPlayer];

  constructor(health: number, money: number, race: Race, strenght: number, intelligence: number, luck: number, inventory: [ItemPlayer]) {
    this._health = health;
    this._money = money;
    this._race = race;
    this._strenght = strenght;
    this._intelligence = intelligence;
    this._luck = luck;

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

  public get inventory(){
    return this._inventory;
  }

  public set inventory(inventory: [ItemPlayer]){
    this._inventory = inventory;
  }
}

export default Player;