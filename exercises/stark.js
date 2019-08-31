class Stark {
  constructor(name, location) {
    this.name = name;
    this.safe = false;
if (location == undefined) {
    this.location = "Winterfell"
  } else {
    this.location = location;
  }
  }
  houseWords() {
    if (this.safe == true) {
    return `The North Remembers`
  } else {
    return `Winter is Coming`
  }
  }
}

module.exports = Stark;
