class Vehicle {
    private _name: string;
    private _maxFuel: number;
    private _maxHealth: number;
    private _maxShield: number;

    constructor(name: string, maxFuel: number, maxHealth: number, maxShield: number) {
        this._name = name;
        this._maxFuel = maxFuel; 
        this._maxHealth = maxHealth;  
        this._maxShield = maxShield;     
    }

    public get name() {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    public get maxFuel() {
        return this._maxFuel;
    }
    public set maxFuel(maxFuel: number) {
        this._maxFuel = maxFuel;
    }

    public get maxHealth() {
        return this._maxHealth;
    }
    public set maxHealth(maxHealth: number) {
        this._maxHealth = maxHealth;
    }

    public get maxShield() {
        return this._maxShield;
    }
    public set maxShield(maxShield: number) {
        this._maxShield = maxShield;
    }
}
export default Vehicle;