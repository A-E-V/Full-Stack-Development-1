//exercise 1
const greeter = (myArray, counter) => {
    const greetText = 'Hello ';
  
    for (const item of myArray) {
      console.log(`${greetText}${item}`);
    }
  }
  
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
  

//exercise 2
const capitalization = (input) => {
    const [firstCharacters, ...restCharacters] = input;
    return `${firstCharacters.toUpperCase()}${restCharacters.join('')}`;
  };
  
  console.log(capitalization('fooBar')); // Output: "FoorBar"
  console.log(capitalization('nodeJs'));  // Output: "NodeJs"


//exercise 3
const colours = ['red', 'green', 'blue'];
const capitalizedColours = colours.map(capitalization);

console.log(capitalizedColours);


//exercise 4
const array = [1, 60, 34, 30, 20, 5]
const filterLessThan20 = array.filter((number) => number < 20);

console.log(filterLessThan20);


//exercise 5
const array2 = [1, 2, 3, 4]
const calculateSum = array2.reduce((container, currentValue) => container + currentValue, 0);
const calculateProduct = array2.reduce((container, currentValue) => container * currentValue, 1);

console.log(calculateSum);
console.log(calculateProduct);


//exercise 6
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    details() {
      return `Model: ${this.model} Engine ${this.year}`;
    }
  }
  
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year);
      this.balance = balance;
    }
  
    info() {
      return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
  }
  
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details()); // Output: Model: Pontiac Firebird Engine 1976
  
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info()); // Output: Volvo SD has a balance of $30000.00
  