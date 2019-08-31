class Hobbits {
  constructor(name) {
    this.name = name;
    this.disposition = "homebody";
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.isShort = true;
    this.hasRing = false;
    if (this.name == "Frodo") {
      this.hasRing = true;
    } else {
      this.hasRing = false;
    }
  }
  celebrateBirthday() {
    this.age = this.age + 1;
    if (this.age < 33) {
        this.adult = false;
      } else {
        this.adult = true;
      }
    if (this.age > 100) {
      this.old = true;
    } else {
      this.old = false;
    }
  }
}




module.exports = Hobbits;
