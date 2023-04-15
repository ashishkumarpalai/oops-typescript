"use strict";
// Polymorphism
// Polymorphism is the ability to create a class with more than one form. Or in other words, classes have the same methods but different implementations.
// In our example, we have one parent class (Character) and one child class (Orc). The child class is overwriting the properties and methods of its parent class. That’s what Polymorphism is.
class Character1 {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    talk() {
        console.log('Says something ...');
    }
    attack() {
        console.log(`Attacks his target with his fists.`);
    }
}
class Orcc extends Character1 {
    constructor(name, damage, weapon) {
        super(name, damage);
        this.weapon = weapon;
    }
    talk() {
        console.log('Says something but in orcish ...');
    }
    attack() {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}
