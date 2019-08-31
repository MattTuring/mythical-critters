class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    if (this.statues.length < 3 ) {
    this.statues.unshift(victim);
    victim.stoned = true;
  } else {
    this.statues.pop();
    this.statues.unshift(victim);
    victim.stoned = true;
  }
  }
}

module.exports = Medusa;
