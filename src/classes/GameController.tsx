import Chapter from "./Chapter"

export default class GameController {
  private _id: number
  private _name: string
  private _distance: number
  private _player: any

  private _currentChapter: Chapter | null;
  private _inspace: boolean;
  private _chapters: [Chapter];

  constructor(id: number, name: string, distance: number, player: any, chapters: [Chapter]) {
    this._id = id
    this._name = name
    this._distance = distance
    this._player = player
    this._currentChapter = null
    this._chapters = chapters
    this._inspace = true
  }

  get id(): number {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get distance(): number {
    return this._distance
  }

  get player(): any {
    return this._player
  }

  get currentChapter(): Chapter | null {
    return this._currentChapter
  }

  get inSpace(): boolean {
    return this._inspace
  }

  set currentChapter(chapter: Chapter | null) {
    this._currentChapter = chapter
  }

  public nextChaptersAvailables() : Array<Chapter> {
    const currentX = (this._currentChapter) ? this._currentChapter.x : 0
    const currentY = (this._currentChapter) ? this._currentChapter.y : 0
    const ship = this.player.ship;
    return this._chapters.filter((chapter)=>{
      const distance = chapter.distanceFrom(currentX, currentY)
      return ship.getMaxFlyingDistance() <= distance
    })
  }

}
