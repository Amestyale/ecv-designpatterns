class Vehicle {
    public name: string;
    public maxFuel: number;
    public maxHealth: number;
    public maxShield: number;

    constructor(name: string, maxFuel: number, maxHealth: number, maxShield: number) {
        this.name = name;
        this.maxFuel = maxFuel; 
        this.maxHealth = maxHealth;  
        this.maxShield = maxShield;     
    }

}

export default Vehicle;