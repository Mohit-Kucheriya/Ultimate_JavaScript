/*

The act of creating a new object actually works in the exact same way as before i.e. using the new operator.
Whenever we create a new object, like a new instance using the new operator, this constructor will automatically be called.

NOTE - All of these methods that we write in the class, so outside the constructor will be on the prototype of the object i.e. These methods are added to the prototype of the class, not directly to the instance object.

All we have to do is to write the methods here, so inside the class, but outside the constructor and they will automatically be added to the prototype property of the class basically.

*/

class PeronCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear

    }

    calcAge() {
        console.log("Age is " + (new Date().getFullYear() - this.birthYear));

    }
}

const jessica = new PeronCl("Jessica", 1990);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PeronCl.prototype);

/*

Things to keep in mind:
1. Classes are NOT hoisted.
2. Classes are first-class citizens.
3. Classes are executed in strict mode.

*/