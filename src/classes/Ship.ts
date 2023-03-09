import ItemShip from "./ItemShip";

class Ship {
    public _items:[ItemShip];
    public _fuel:number;
    public _health:number;
    public _shield:number;

    constructor(fuel: number, health: number, shield: number, items: [ItemShip]) {
        this._fuel = fuel;
        this._health = health;
        this._shield = shield;
        this._items = items;
    }
    
    public get fuel() {
        return this._fuel;
    }
    public set fuel(fuel: number) {
        this._fuel = fuel;
    }

    public get health() {
        return this._health;
    }
    public set health(health: number) {
        this._health = health;
    }

    public get shield() {
        return this._fuel;
    }
    public set shield(shield: number) {
        this._shield = shield;
    }

    public get items(){
        return this._items;
    }
    
    public set items(items: [ItemShip]){
        this._items = items;
    }
    addItem(item: ItemShip) {
        this._items.push(item)
    }
}
export default Ship;