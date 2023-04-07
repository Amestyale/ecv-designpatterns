import EventsData from "../../data/EventsData"
import GameController from "../GameController"
import Option from "../gamemanagement/Option"
import Room from "../Room"
import Scenario from "../Scenario"

class EventHandlerP{
  public gameInstance : GameController

  constructor(gameInstance: GameController){
    this.gameInstance = gameInstance
  }

  public handle(): boolean | Room {
    return false
  }

}


class EventHandlerUnexpected extends EventHandlerP{

  public handle(){
    if(this.gameInstance.inevent){
      const scenario = new Scenario(this.gameInstance)
      this.gameInstance.inevent = false
      scenario.instanciateRoom(EventsData[0])
      return true
    } else {
      return false
    }
  }

}

class EventHandlerPlanet extends EventHandlerP{

  public handle(){
    if (!this.gameInstance.inspace && this.gameInstance.currentPlanet) {
      this.gameInstance._currentRoom =  this.gameInstance.currentPlanet.rooms[0]
      return true
    } else {
      return false
    }
  }
}

class EventHandlerFlightPlan extends EventHandlerP {

  public handle(){
    return false
  }
}

export {EventHandlerP, EventHandlerFlightPlan, EventHandlerUnexpected, EventHandlerPlanet}