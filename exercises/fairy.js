class Fairy {
  constructor(name, clothes) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = "Good natured";
    this.humanWards = [];
    this.stolen = 0;
  }
  receiveBelief() {
    this.dust += 1;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(arr) {
    for (var i = 0; i < arr.length; i++)
      this.clothes.dresses.push(arr[i]);
  }
  provoke(){
    this.disposition = "Vengeful"
  }
  replaceInfant(infant) {
    if (this.disposition === "Vengeful") {
        this.humanWards.push(infant);
        infant.disposition = "Malicious"
        this.stolen += 1;
    } else {
      return infant;
    }
    if (this.stolen === 3) {
      this.disposition = "Good natured"
    }
  }
}

module.exports = Fairy;
