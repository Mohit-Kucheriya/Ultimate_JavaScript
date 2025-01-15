'use strict';

/*

In OOP there is a convention that the constructor function always starts with a capital letter.
NOTE - Arrow function will actually not work here, because arrow functions don't have their own 'this' keyword.

So, we can write a constructor function like this:

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Now, we can create an object of the Person class like this:

const person = new Person('Mohit', 2001);

So here, 'new' operator is a special operator that it calls the constructor function and returns an object.

*/

const Person = function (firstName, birthYear) {
    console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear
    console.log(this);

    // Never create methods inside the constructor function.
    this.clacAge = function () {
        console.log(2037 - this.birthYear);
    }
}

const mohit = new Person("Mohit", 2001)
console.log(mohit);
console.log(mohit instanceof Person);

/*

So, what happens when we call the constructor function without the 'new' operator?

Behind the scenes, there are four steps:
1. New empty object is created i.e. {}
2. The function is called and in this function call the 'this' keyword is bound to the empty object i.e. this = {}. 
So, basically in the execution context of the person function, the this keyword will point to this new object that we created in step 1.

3. This newly created object is linked to a prototype.
4. The object that was created in the beginning is then automatically returned from the constructor function.

NOTE - JavaScript really doesn't have a concept of classes in a sense of traditional OOP. However, we did create an object from a constructor function. So, we can say 'mohit' here is an instance of Person

*/


