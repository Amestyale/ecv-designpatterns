import Race from './Race'

class Human extends Race {
  constructor(name = 'Humain', maxHealth = 100, strenght = 5, intelligence = 5, luck = 5) {
    super(name, maxHealth, strenght, intelligence, luck)
  }
}

export default Human
