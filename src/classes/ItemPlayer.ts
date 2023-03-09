import Item from "./Item";
import PlayerStatList from "../types/PlayerStatList";

class ItemPlayer extends Item {
    private _type: string;
    private _category: string;
    private _stat: [{name: PlayerStatList, modifier: number}];
  
    constructor(title: string, description: string, stat: [{name: PlayerStatList, modifier: number}], type: string, category: string) {

        super(title, description);

        // Either Object or Effect
        this._type = type;

        // Can be shoes or helmet or weapon or whatever
        this._category = category;

        // {name: 'strenght',modifier: '2'}
        this._stat = stat;
      }

      public get type(){
        return this._type;
      }
    
      public set type(type: string){
        this._type = type;
      }

      public get category(){
        return this._category;
      }
    
      public set category(category: string){
        this._category = category;
      }

      public get stat(){
        return this._stat;
      }
    
      public set stat(stat: [{name: PlayerStatList, modifier: number}]){
        this._stat = stat;
      }

}

export default ItemPlayer;