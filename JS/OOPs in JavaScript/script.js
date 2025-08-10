// Objects

let animal = {
  eats: true,
};

let rabit = {
  jumps: true,
};

rabit.__proto__ = animal;

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created...");
  }

  eats() {
    console.log("Kha raha hu");
  }
  jumps() {
    console.log("Kood raha hu");
  }
}

let a = new Animal("Bunny");
console.log(a);

class Lion extends Animal {
    constructor(name) {
    super(name)
    console.log("Object is created... and he is a Lion");
  }
  eats() {
    super.eats()
    console.log("Chaba raha hu")
  }
}

let l = new Lion("Sher");
console.log(l);
