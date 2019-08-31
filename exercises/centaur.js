class Centaur {
  constructor(name, breed, cranky) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.rested = true;
  }
  shoot() {
    if (this.cranky == false && this.layingDown == false ) {
      this.cranky = true;
      this.rested = false;
      return `Twang!!!`
  } else {
    return `NO!`
  }
  }
  run() {
    if (this.layingDown == true) {
      return `NO!`
    } else {
    this.cranky = true;
    return `Clop clop clop clop!!!`
  }
  }
  sleep() {
   if (this.standing == true) {
     return `NO!`
   } else if (this.layingDown == true) {
    this.cranky = false;
    return `ZZZZ`
  }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing === true && this.rested === true) {
    this.cranky = true;
  } else if (this.standing === true && this.rested === false){
    this.cranky = false;
  } else {
    return `Not while I\'m laying down!`
  }
  }
}

module.exports = Centaur;
