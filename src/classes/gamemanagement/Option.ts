import Modifier from "./Modifier/Modifier";

export default class Option{
  private title: String;
  private text: String;
  private modifiers: Array<Modifier>

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