class Pet { //parent class
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

//the following getter and setter methods prevent a property from being directly modified - Encapsulation
 set name(petName){
  if(typeof petName === 'string') this._name = petName;
  else return 'Invalid Pet name';

  }
  get name() {
    return this._name;
  }
  
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior++;
  }
}

class Dog extends Pet{//inheritance :child class
	constructor(name, usesLitter) {
    super(name); // for polymorphism
  }
}
class Cat extends Pet{ //inheritance: child class
  constructor(name, usesLitter) {
    super(name); //for polymorphism
    this._usesLitter = usesLitter; //unique property 
  }
}