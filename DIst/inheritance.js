"use strict";
// Inheritance
// Inheritance is a compelling feature, and it allows you to have code reusability. Imagine you have an existing class, and you build a new class, which uses properties or methods of that existing class while you want to add additional features to it. That’s where Inheritance will take place. You call these classes usually sub-class, child-class, or lower-class. These classes extend from their upper class, often called super-class, base-class, or parent-class.
// In the following example, you’ll see that our Orc class will inherit from the Character class by extending from it.
class Character {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    talk() {
        console.log('Says something ...');
    }
}
class Orc extends Character {
    constructor(name, damage, weapon) {
        super(name, damage);
        this.weapon = weapon;
    }
    attack() {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}
