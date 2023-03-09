class Ship {
    public _items:[string];
    public _fuel:number;
    public _health:number;
    public _shield:number;

    constructor(fuel: number, health: number, shield: number, items: [string]) {
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
/*
    getHealthMax(vehicle) {

    }
    */
   
}
export default Ship;