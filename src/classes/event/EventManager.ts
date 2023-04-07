
import GameController from "../GameController";
import { EventHandlerP, EventHandlerPlanet, EventHandlerUnexpected } from "./EventHandler";


export default class EventManager {
  public gameInstance : GameController
  private eventHandlers : Array<EventHandlerP> = []
  
  constructor(gameInstance: GameController){
    this.gameInstance = gameInstance
    this.eventHandlers = [
      new EventHandlerP(this.gameInstance),
      new EventHandlerP(this.gameInstance),
      new EventHandlerP(this.gameInstance)
    ]
  }

  resolve(){
    let i = 0;
    while(i < this.eventHandlers.length && !this.eventHandlers[i].handle() ){
      i++
    }
  }

}