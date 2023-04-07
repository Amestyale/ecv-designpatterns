import EventsData from "../../data/EventsData"
import GameController from "../GameController"
import ModifierCustom from "../gamemanagement/Modifier/ModifierCustom"
import Option from "../gamemanagement/Option"
import Planet from "../Planet"
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
      this.gameInstance._currentRoom = this.gameInstance.currentPlanet.rooms[0]
      return true
    } else {
      return false
    }
  }
}

class EventHandlerFlightPlan extends EventHandlerP {

  public handle(){
    const options = this.gameInstance.nextPlanetsAvailables().map((planet: Planet) => {
      const modifier = new ModifierCustom(() => {
        this.gameInstance.player.ship.flying(planet.distanceFrom(this.gameInstance.currentX(), this.gameInstance.currentY()))
        this.gameInstance.currentPlanet = planet
        this.gameInstance.inspace = false
        this.gameInstance.inevent = this.gameInstance.canevent ? Math.random() * 0 + this.gameInstance.player.luck > 10 : false
      })
      const opt = new Option(`Aller sur ${planet.name}`, planet.appearance, [modifier])
      return opt
    })

    this.gameInstance._currentRoom = new Room(0, 'Choisir le cap', 'Où voulez-vous aller ?', options, 'buttons')

    return true
  }
}

export {EventHandlerP, EventHandlerFlightPlan, EventHandlerUnexpected, EventHandlerPlanet}