
import GameController from "../GameController";
import { EventHandlerFlightPlan, EventHandlerP, EventHandlerPlanet, EventHandlerUnexpected } from "./EventHandler";


export default class EventManager {
  public gameInstance : GameController
  private eventHandlers : Array<EventHandlerP> = []
  
  constructor(gameInstance: GameController){
    this.gameInstance = gameInstance
    this.eventHandlers = [
      new EventHandlerUnexpected(this.gameInstance),
      new EventHandlerPlanet(this.gameInstance),
      new EventHandlerFlightPlan(this.gameInstance)
    ]
  }

  resolve(){
    let i = 0;
    while(i < this.eventHandlers.length && !this.eventHandlers[i].handle() ){
      i++
    }
  }

}