class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.huntsWhiteWalkers = true;
    this.starksToProtect = [];
    if  (size == undefined) {
       this.size = "Massive"
     } else {
       this.size = size;
     }
  if  (home == undefined) {
     this.home = "Beyond the Wall"
   } else {
     this.home = home;
   }
  }
  protect(stark, direwolf) {
     {
       if (stark.location == this.home && this.starksToProtect.length < 2) {
    this.starksToProtect.push(stark);
    stark.safe = true;
    this.huntsWhiteWalkers = false;
  }
}
}
 leave(stark) {
   stark.safe = false;
   this.starksToProtect.pop(stark);
 }
}

module.exports = Direwolf;
