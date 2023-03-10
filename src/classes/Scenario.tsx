import Planet from './Planet'
import Room from './Room'

import PlanetData from '../data/PlanetData'
import RoomData from '../data/RoomData'


export default class Scenario {
  private _planets: [Planet | null]
  private _distance: number

  constructor(PlanetData: [any | null]) {
    this._distance = 100;

    this._planets = this.InstantiatePlanetList(PlanetData);
  }

  private InstantiatePlanetList(PlanetData: [any | null]): any{

    const planetlist = PlanetData.map(x => new Planet(
      x.id,
      x.name,
      x.description,
      x.appearance,
      this.InstantiateRoomList(x.rooms)
    ));

  }

  private InstantiateRoomList(RoomIdList: [any | null]): any{
    
    const roomlist = []

    for (let i = 0; i < RoomIdList.length-1; i++) {
      const currentData = RoomData.find((data) => data.id === RoomIdList[i]);

      roomlist.push(new Room(
        currentData.id,
        currentData.title,
        currentData.text,
        [],
        currentData.optionFacade
      ));
    }

  }

}
