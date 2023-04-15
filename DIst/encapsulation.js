"use strict";
// Encapsulation
// The second concept of OOP is Encapsulation. Encapsulation is built on the idea of hiding data. This is where we restrict access to specific properties or methods.
// In our example, the property _name is private. This means we can’t access this property from outside the class. To get access to this private property, we use the so-called getter and setter methods.
class Characte {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
