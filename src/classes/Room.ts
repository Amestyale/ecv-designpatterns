import Option from "./gamemanagement/Option"

export default class Room {
  public id: number
  public title: string
  public text: string
  public options: Option[]
  public optionFacade: string

  constructor(id: number, title: string, text: string, options: Option[], optionFacade: string) {
    this.id = id
    this.title = title
    this.text = text
    this.options = options
    this.optionFacade = optionFacade
  }

}
