import ItemShip from './ItemShip'

class Ship {
  public _items: [ItemShip | null]
  public _fuel: number
  public _health: number
  public _shield: number

  constructor(fuel: number, health: number, shield: number, items: [ItemShip | null]) {
    this._fuel = fuel
    this._health = health
    this._shield = shield
    this._items = items
  }

  public get fuel() {
    return this._fuel
  }
  public set fuel(fuel: number) {
    this._fuel = fuel
  }

  public get health() {
    return this._health
  }
  public set health(health: number) {
    this._health = health
  }

  public get shield() {
    return this._fuel
  }
  public set shield(shield: number) {
    this._shield = shield
  }

  public get items() {
    return this._items
  }

  public set items(items: [ItemShip | null]) {
    this._items = items
  }

    addItem(item: ItemShip) {
        this._items.push(item)
    }

    removeItem(id: string) {
        // Find item index with given id
        const index = this._items.findIndex(item => item && item.id === id);
        // If item not found, return array without modification
        if (index === -1) {
          return this._items;
        }
        // Delete item
        this._items.splice(index, 1);
        return this._items;
      }
   
    getMaxFlyingDistance(){
      // 1 fuel = 50 distance
      return this.fuel * 50
    }
}
export default Ship
