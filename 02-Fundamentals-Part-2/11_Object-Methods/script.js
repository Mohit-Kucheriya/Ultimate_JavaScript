/*

Object Methods - Any function attached to an object is called a method. Function declaration don't work here, it needs to be a function expression.

Syntax:

functionName = function (parameter1, parameter2) {
    // code
}

Here functionName is simply the property name of the object that hold a function value

*/

const personObj = {
    firstName: "Harry",
    lastName: "Potter",
    birthYear: 1995,
    job: "Wizard", // string
    hasDriverLicense: true, // boolean 
    friends: ["Ron", "Hermione", "Ginny"], // array

    calculateAge: function (birthYear) { // function expression
        console.log(this) // personObj  = {firstName: "Harry", lastName: "Potter", birthYear: 1995, job: "Wizard", hasDriverLicense: true, friends: ["Ron", "Hermione", "Ginny"]}
        return 2024 - this.birthYear;
    }

}

console.log(personObj.calculateAge(personObj.birthYear));
console.log(personObj.calculateAge());

/*

this keyword - this refers to the object itself i.e it is equal to the object calling the function or method. Here this refers to personObj.

Object that is calling the calculateAge method here is personObj. So, inside the calculateAge method 'this' variable or the 'this' keyword will point to personObj.

*/


/*

As we know 'this' refers to the object itself, so to add a new property to the object, we can use this.propertyName = value.

*/
const jhonObj = {
    firstName: "Jhon",
    lastName: "Snow",
    birthYear: 1990,
    job: "Actor",
    workInSeries: "Game of Thrones",
    hasDriverLicense: true,

    calculateAge: function () {
        console.log(this);
        this.age = 2024 - this.birthYear;
        console.log(this)
        return this.age
    },

    getSummary: function () {
        return `Heello my name is ${this.firstName} ${this.calculateAge()} year old. I'm an ${this.job} currently working in series called ${this.workInSeries} and i'm ${this.hasDriverLicense ? `Able to Drive` : `Not able to drive`} `
    }
}


console.log(jhonObj.calculateAge())
console.log(jhonObj.age); // The 'age' property only gets create when the calculateAge method is called. This is because the method calculate the age and assigns it to the 'this.age', which adds age as a new property to the object.

console.log(jhonObj.getSummary());

