class Vehicle {
    constructor(name: string, fuelMax: number, healthMax: number, shieldMax: number) {
        this.name = name;
        this.fuelMax = fuelMax; 
        this.healthMax = healthMax;  
        this.shieldMax = shieldMax;     
    }

    public get name() {
        return this.name;
    }
    public set name(name: string) {
        this.name = name;
    }

    public get fuelMax() {
        return this.fuelMax;
    }
    public set fuelMax(fuelMax: number) {
        this.fuelMax = fuelMax;
    }

    public get healthMax() {
        return this.healthMax;
    }
    public set healthMax(healthMax: number) {
        this.healthMax = healthMax;
    }

    public get shieldMax() {
        return this.shieldMax;
    }
    public set shieldMax(shieldMax: number) {
        this.shieldMax = shieldMax;
    }
}
export default Vehicle;