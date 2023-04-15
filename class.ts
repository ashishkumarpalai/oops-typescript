class Car {
    model:string;
    color:string;
    isElectric:boolean;
  
    constructor(model:string, color:string, isElectric:boolean) {
      this.model = model;
      this.color = color;
      this.isElectric = isElectric;
    }
  
    drive() {
      const engineStarted = this.startEngine();
  
      // some method to drive after starting the engine
    }
  
    startEngine() {
      // some method to start the engine
  
      return true;
    }
  }