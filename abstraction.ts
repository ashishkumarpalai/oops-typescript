// Abstraction
// The first concept of OOP is Abstraction. Abstraction in OOP means to only expose the necessary details to the user of the class. Everything underlying doesn’t matter. To reach abstraction in TypeScript, you have multiple ways: abstract class/method, interfaces, and types.

// I will show you an example based on an abstract class since an abstract class is a way to go since you can define public in private properties and methods, which isn’t possible in interfaces and types.

abstract class Characterr {
    public name: string;
    public damage: number;
    public attackSpeed: number;
  
    constructor(name: string, damage: number, speed: number) {
      this.name = name;
      this.damage = damage;
      this.attackSpeed = speed;
    }
  
    public abstract damagePerSecond(): number;
  }
  
  class Goblin extends Characterr {
    constructor(name: string, damage: number, speed: number) {
      super(name, damage, speed);
    }
  
    public damagePerSecond(): number {
      return this.damage * this.attackSpeed;
    }
  }