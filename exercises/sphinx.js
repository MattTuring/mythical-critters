class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
    this.riddles.push(riddle);
  } else {
    this.riddles.shift(riddle);
    this.riddles.push(riddle);
  }
  }
  attemptAnswer(response) {
    for (var i = 0; i < this.riddles.length; i++ ) {
    if (this.riddles[i].answer === response) {
    this.riddles.splice([i], 1);
  } else {
    this.heroesEaten = 1;
  }
  }
   if (this.riddles.length === 0) {
     return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${response}\"???`
   } else {
     return `That wasn\'t that hard, I bet you don\'t get the next one`
   }
  }
}

module.exports = Sphinx;
