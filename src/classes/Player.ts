import ItemPlayer from "./ItemPlayer";
import Race from "./Race";
import Ship from "./Ship";

class Player {
  private _health: number;
  private _money: number;
  private _race: Race;

  private _inventory: [ItemPlayer];
  private _ship: Ship;

  constructor(health: number, money: number, race: Race, inventory: [ItemPlayer], ship: Ship) {
    this._health = health;
    this._money = money;
    this._race = race;

    //TODO Define how inventory work
    this._inventory = inventory;
    this._ship = ship;
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

  public get ship(){
    return this._ship
  }


  addItem(item: ItemPlayer) {
    this._inventory.push(item)
}

  removeItem(id: string) {
    const index = this._inventory.findIndex(item => item.id === id);
    if (index === -1) {
      return this._inventory;
    }
    this._inventory.splice(index, 1);
    return this._inventory;
  }
}

export default Player;