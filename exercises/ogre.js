class Ogre {
  constructor(name, home) {
    this.name = name;
    this.swings = 0;
    if (home === undefined) {
    this.home = "Swamp"
  } else {
    this.home = home;
  }
  }
  encounter(human) {
    human.encounterCounter += 1;
    if (human.noticesOgre()) {
      this.swings += 1;
  }
  if (this.swings % 2 === 0) {
    human.knockedOut = true;
  }
  }

  apologize(human) {
    human.knockedOut = false;
  }
  swingAt(human) {
    if (human.noticesOgre()) {
      this.swings += 1;
  } else {
      this.swings += 1;
  }
}
}
module.exports = Ogre;
