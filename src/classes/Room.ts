import Option from "./gamemanagement/Option"

export default class Room {
  private _id: number
  private _title: string
  private _text: string
  private _options: Option[]
  private _optionFacade: string

  constructor(id: number, title: string, text: string, options: Option[], optionFacade: string) {
    this._id = id
    this._title = title
    this._text = text
    this._options = options
    this._optionFacade = optionFacade
  }

  get id(): number {
    return this._id
  }
  get title(): string {
    return this._title
  }
  get text(): string {
    return this._text
  }
  get options(): Option[] {
    return this._options
  }
  get optionFacade(): String {
    return this._optionFacade
  }
}
