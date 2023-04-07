class Ship {
  public fuel: number
  public health: number
  public shield: number

  constructor(fuel: number, health: number, shield: number) {
    this.fuel = fuel
    this.health = health
    this.shield = shield
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
