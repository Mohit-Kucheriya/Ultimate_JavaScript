const person = {
    name: "Mohit",
    age: 30,
    address: {
        city: "Delhi",
        country: "India",
    },
    otherDetails: {
        bankDetails: {
            accountNumber: "1234567890",
            branch: "SBI",
            accountType: "Savings",
        },
        email: "mohit@gmail.com",
        phone: "1234567890",
    },

    getDetails() {
        return (`Name: ${this.name} Age: ${this.age} Address: ${this.address.city}`);
    }
};

console.log(person?.setDetails); // undefined

console.log(person?.setDetails?.()); // undefined

console.log(person?.setDetails());
// TypeError: person?.setDetails is not a function


console.log(person.callDetails) // undefined
console.log(person.callDetails());

/*

1. person.callDetails = undefined 

2. If we try to call the function  with undefined, it will throw an error.
i.e. person.callDetails = undefined;

3. undefined() 
TypeError: person.callDetails is not a function

Step 1: person.getDetails is evaluated.

Step 2: If it exists and is callable, it is executed.

This evaluation process ensures that JavaScript checks for property existence first, 
and only after confirming, does it attempt to invoke it as a function.

*/


