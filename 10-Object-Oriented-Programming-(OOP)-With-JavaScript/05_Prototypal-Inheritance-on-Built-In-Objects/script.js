const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const mohit = new Person("Mohit", 2001);

console.log(mohit.firstName);

Person.prototype.getDetails = function () {
    console.log(
        `Hello, my name is ${this.firstName} and I was born in ${this.birthYear}`
    );
};

mohit.getDetails();

console.log(mohit.__proto__);

// Object.prototype (top of the prototype chain)
console.log(mohit.__proto__.__proto__);
console.log(mohit.__proto__.__proto__.__proto__);

/*

Array 

When we create an array like const arr = [1,2,3], it is indeed created by the array constructor i.e.  new Array === []

Any array inherits all their methods from it's prototype i.e. Array.prototype

*/

const arr = [1, 2, 3, 4, 3, 12, 11, 1, 2];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1.__proto__)
console.dir(h1.__proto__.__proto__)
console.dir(h1.__proto__.__proto__.__proto__)
console.dir(h1.__proto__.__proto__.__proto__.__proto__)
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__)
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__)
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__)
