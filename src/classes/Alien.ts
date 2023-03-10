import Race from './Race'

class Alien extends Race {
  constructor(name = 'Alien', maxHealth = 200, strenght = 10, intelligence = 10, luck = 10) {
    super(name, maxHealth, strenght, intelligence, luck)
  }
}

export default Alien
