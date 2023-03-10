import Planet from './Planet'
import Room from './Room'

import PlanetData from '../data/PlanetData'
import RoomData from '../data/RoomData'
import Option from './gamemanagement/Option'
import Modifier from './gamemanagement/Modifier/Modifier'
import ModifierPlayerStat from './gamemanagement/Modifier/ModifierPlayerStat'


export default class Scenario {
  private _planets: Planet[]
  private _distance: number
  private _gameinstance: any

  constructor(PlanetData: any[], gameInstance : any) {
    this._distance = 100;

    this._gameinstance = gameInstance
    this._planets = this.InstantiatePlanetList(PlanetData);
    console.log(gameInstance)
  }

  private InstantiatePlanetList(PlanetData: Planet[]): any{

    const planetlist = PlanetData.map(x => new Planet(
      x.x,
      x.y,
      x.name,
      x.description,
      x.appearance,
      this.InstantiateRoomList(x.rooms)
    ));

    return planetlist
  }

  private InstantiateRoomList(RoomIdList: any[]): any{
    
    const roomlist = []

    for (let i = 0; i < RoomIdList.length-1; i++) {
      const currentData = RoomData.find((data) => data.id == RoomIdList[i]);

      if(!currentData) continue;
      roomlist.push(new Room(
        currentData.id,
        currentData.title,
        currentData.text,
        this.instantiateOptions(currentData.options),
        currentData.optionFacade
      ));
    }

    return roomlist
  }

  private instantiateOptions(options: any): Option[]{
    return options.map((option: any)=> this.instantiateOption(option))
  }

  private instantiateOption(data: any): Option{
    const modifiers = data.consequences.map((consequence: any)=>{
      return this.instantiateModifier(consequence)
    })
    return new Option(
      data.name,
      data.description,
      modifiers
    )
  }

  private instantiateModifier(data: any): Modifier | null{
    switch(data.type){
      case 'player-data':
        return new ModifierPlayerStat(this._gameinstance.player, data.name, data.modifier)

      default:
        return null
    }
  }

  
  get planets(): Planet[] {
    return this._planets
  }
}
