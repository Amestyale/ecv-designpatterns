import Item from "./Item";
import { ShipStatList } from "../types/ShipStatList";

class ItemShip extends Item {
    private _stat: [{name: ShipStatList, modifier: number}];
  
    constructor(id: string, title: string, description: string, stat: [{name: ShipStatList, modifier: number}], type: string, category: string) {

        super(id, title, description, type, category);

        // {name: 'strenght',modifier: '2'}
        this._stat = stat;
      }

      public get stat(){
        return this._stat;
      }
    
      public set stat(stat: [{name: ShipStatList, modifier: number}]){
        this._stat = stat;
      }

}

export default ItemShip;