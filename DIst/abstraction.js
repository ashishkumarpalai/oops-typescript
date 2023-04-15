"use strict";
// Abstraction
// The first concept of OOP is Abstraction. Abstraction in OOP means to only expose the necessary details to the user of the class. Everything underlying doesn’t matter. To reach abstraction in TypeScript, you have multiple ways: abstract class/method, interfaces, and types.
// I will show you an example based on an abstract class since an abstract class is a way to go since you can define public in private properties and methods, which isn’t possible in interfaces and types.
class Characterr {
    constructor(name, damage, speed) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }
}
class Goblin extends Characterr {
    constructor(name, damage, speed) {
        super(name, damage, speed);
    }
    damagePerSecond() {
        return this.damage * this.attackSpeed;
    }
}
