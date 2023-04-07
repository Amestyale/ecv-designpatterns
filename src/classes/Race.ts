abstract class Race {
  public name: string;
  public maxHealth: number;

  public strenght: number;
  public intelligence: number;
  public luck: number;

  constructor(name: string, maxHealth: number, strenght: number, intelligence: number, luck: number) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.strenght = strenght;
    this.intelligence = intelligence;
    this.luck = luck;
  }
}

export default Race;