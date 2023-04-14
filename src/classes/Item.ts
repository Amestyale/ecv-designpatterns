export default class Item {
  public id: string
  public name: string
  public description: string
  public image: string

  constructor(id: string, name: string, opts: any = {}) {
    this.id = id
    this.name = name
    this.description = opts.description ?? "Un banal " + (this.name).toLowerCase()
    this.image = opts.image ?? ""
  }

}
