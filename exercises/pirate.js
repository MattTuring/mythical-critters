class Pirate {
  constructor(name, job) {
    this.name = name;
    if (job == undefined) {
      this.job = "Scallywag"
    } else {
      this.job = job;
    }
    this.cursed = false;
    this.acts = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
    this.acts = this.acts + 1;
    if (this.acts == 3) {
      this.cursed = true;
    }
  }
  robShip() {
    this.booty = this.booty + 100;
    return `YAARRR!`;
  }
}

module.exports = Pirate;
