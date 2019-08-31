class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    this.canEat = false;
  }
  change() {
    if (this.human == true) {
    this.human = false;
    this.wolf = true;
    this.hungry = true;
    this.canEat = true;
  } else {
    this.human = true;
    this.wolf = false;
    this.canEat = false;
  }
}
  eat(victim) {
    if (this.canEat == true) {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
      this.canEat = false;
      victim.alive = false;
    } else {
      return `No eat allowed`
    }
  }

}

module.exports = Werewolf;
