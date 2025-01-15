/*

1. First, each and every function in JavaScript automatically has a property called 'prototype'. And that includes constructor functions.

2. Now every onject that's created by certain constructor function will get access to all the methods and properties that are defined in the prototype of that constructor function.

3. The value of .__proto__ is set to the prototype of the constructor function that created the object.

4. The prototype of the constructor function is the blueprint for all objects created from that constructor function.

*/

const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear
}
const mohit = new Person("Mohit", 2001)
console.log(mohit);
console.log(mohit instanceof Person);

const jonas = new Person("Jonas", 1978)

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

/*

Every object that is created from the Person constructor function will have access to the 'calcAge' method. And 'this' keyword is always set to the object that is calling the method.

*/

mohit.calcAge();
jonas.calcAge();

console.log(jonas.__proto__);
console.log(Person.prototype);
console.log(jonas.__proto__ === Person.prototype);

/*

We can even set the properties that are shared by all instances of a constructor function.

*/

Person.prototype.species = "Homo Sapiens";

/*

And this property is not directly in the object. So it's not its own property. So own properties are only the ones that are declared directly on the object itself. And in JavaScript, we check it using the 'hasOwnProperty' method.

*/
console.log(jonas.species);

console.log(jonas.hasOwnProperty("firstName")); 
console.log(jonas.hasOwnProperty("species")); 


