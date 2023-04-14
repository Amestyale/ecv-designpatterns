export default class Item {
  public name: string
  public description: string
  public image: string

  constructor(name: string, opts: any) {
    this.name = name
    this.description = opts.description ?? "Un banal " + (this.name).toLowerCase()
    this.image = opts.image ?? ""
  }

}
