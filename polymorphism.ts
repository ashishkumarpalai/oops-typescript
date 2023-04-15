// Polymorphism
// Polymorphism is the ability to create a class with more than one form. Or in other words, classes have the same methods but different implementations.

// In our example, we have one parent class (Character) and one child class (Orc). The child class is overwriting the properties and methods of its parent class. That’s what Polymorphism is.


class Character1 {
    public name: string;
    public damage: number;
  
    constructor(name: string, damage: number) {
      this.name = name;
      this.damage = damage;
    }
  
    public talk(): void {
      console.log('Says something ...');
    }
  
    public attack(): void {
      console.log(`Attacks his target with his fists.`);
    }
  }
  
  class Orcc extends Character1 {
    public weapon: string;
  
    constructor(name: string, damage: number, weapon: string) {
      super(name, damage);
  
      this.weapon = weapon;
    }
  
    public talk(): void {
      console.log('Says something but in orcish ...');
    }
  
    public attack(): void {
      console.log(`Attacks his target with his ${this.weapon}.`);
    }
  }