import Chapter from "./Chapter"

export default class Game {
  private _id: number
  private _name: string
  private _distance: string
  private _player: any

  private _currentChapter: Chapter;
  private _chapters: [Chapter];

  constructor(id: number, name: string, distance: string, player: any, chapters: [Chapter], startChapter: Chapter) {
    this._id = id
    this._name = name
    this._distance = distance
    this._player = player
    this._currentChapter = startChapter
    this._chapters = chapters
  }

  get id(): number {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get distance(): string {
    return this._distance
  }

  get player(): any {
    return this._player
  }

  get currentChapter(): Chapter {
    return this._currentChapter
  }

  set currentChapter(chapter: Chapter) {
    this._currentChapter = chapter
  }

  public nextChaptersAvailables() : Array<Chapter> {
    const currentX = this._currentChapter.x
    const currentY = this._currentChapter.y
    const ship = this.player.ship;
    return this._chapters.filter((chapter)=>{
      const distance = chapter.distanceFrom(currentX, currentY)
      return ship.getMaxFlyingDistance() <= distance
    })
  }

}
