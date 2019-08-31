class Wizard {
  constructor(pass) {

  this.name = pass.name;
  this.isRested = true;
  this.spells = 0;
  if (pass.bearded == undefined) {
    this.bearded = true;
  } else {
    this.bearded = pass.bearded;
  }
  }

  incantation(words) {
    return `${words.toUpperCase()}`
  }

  cast() {
    this.spells = this.spells + 1;
    if (this.spells == 3) {
      this.isRested = false;
    } else if (this.spells > 3) {
      return `I SHALL NOT CAST`
    }
    return `MAGIC BULLET`
  }
}
module.exports = Wizard;
