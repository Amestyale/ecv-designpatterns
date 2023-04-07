import Modifier from "./Modifier/Modifier";

export default class Option{
  public title: String;
  public text: String;
  public modifiers: Array<Modifier>

  constructor(title: String, text: String, modifiers: Array<Modifier>){
    this.title = title
    this.text = text
    this.modifiers = modifiers
  }

  public canBeChoosen(){
    return this.modifiers.every((modifier: Modifier)=>{
      return modifier.canBeChoosen()
    })
  }
}