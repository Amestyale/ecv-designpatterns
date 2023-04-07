class Ship {
  public fuel: number
  public health: number
  public name: string;
  public maxFuel: number;
  public maxHealth: number;
  public maxShield: number;

  constructor(fuel: number, health: number, name: string, maxFuel: number, maxHealth: number, maxShield: number) {
    this.fuel = fuel;
    this.health = health;
    this.name = name;
    this.maxFuel = maxFuel; 
    this.maxHealth = maxHealth;  
    this.maxShield = maxShield;     
  }
   
    getMaxFlyingDistance(){
      // 1 fuel = 50 distance
      return Math.floor(this.fuel * 50)
    }
    
    flying(dist: number){
      // 1 fuel = 50 distance
      this.fuel -= Math.ceil(dist / 50)
    }
}
export default Ship
