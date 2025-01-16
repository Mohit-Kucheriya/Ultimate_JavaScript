/*

Static Methods are methods that are attached to the class itself, and not to the instance of the class.

*/

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Instance Methods i.e. all instances of the class will have this method
    calcAge() {
        return new Date().getFullYear() - this.birthYear;
    }

    static greetFun() {
        return "Hello World";
    }
}

const harry = new PersonCl("Harry", 1990);
console.log(harry.calcAge());

console.log(PersonCl.greetFun());
console.log(harry.greetFun()); // TypeError: harry.getFullDetails is not a function

