
// Encapsulation
// The second concept of OOP is Encapsulation. Encapsulation is built on the idea of hiding data. This is where we restrict access to specific properties or methods.

// In our example, the property _name is private. This means we can’t access this property from outside the class. To get access to this private property, we use the so-called getter and setter methods.






class Characte {
    private _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    public get name(): string {
      return this._name;
    }
  
    public set name(value: string) {
      this._name = value;
    }
  }