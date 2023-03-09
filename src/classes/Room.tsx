export default class Room {
  private _id: number
  private _title: string
  private _text: string
  private _options: [any]
  private _answerType: string

  constructor(id: number, title: string, text: string, options: [any], answerType: string) {
    this._id = id
    this._title = title
    this._text = text
    this._options = options
    this._answerType = answerType
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
  get options(): [any] {
    return this._options
  }
  get answerType(): string {
    return this._answerType
  }
}
