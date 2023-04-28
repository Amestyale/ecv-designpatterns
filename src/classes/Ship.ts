class Ship {
  public fuel: number
  public health: number
  public name: string
  public maxFuel: number
  public maxHealth: number
  public velocity: number

  constructor(name: string, fuel: number, health: number, maxFuel: number, maxHealth: number) {
    this.name = name

    this.fuel = fuel
    this.health = health

    this.maxFuel = maxFuel
    this.maxHealth = maxHealth

    this.velocity = 50
  }

  getMaxFlyingDistance() {
    // 1 fuel = 50 distance
    return Math.floor(this.fuel * this.velocity)
  }

  flying(dist: number) {
    // 1 fuel = 50 distance
    this.fuel -= Math.ceil(dist / this.velocity)
  }
}
export default Ship
