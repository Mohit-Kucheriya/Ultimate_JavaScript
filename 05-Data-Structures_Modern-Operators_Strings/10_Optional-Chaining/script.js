/*

Optional Chaining - 
1. If the property is not available on the left side of the operator, 
the expression returns undefined. Its a safe way to avoid errors.

Syntax -

obj?.prop

2. Optional chaining also works with function calls.

3. Optional chaining also works on arrays

*/

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
        return `Name: ${this.name} Age: ${this.age} Address: ${this.address.city}`;
    },
};

console.log(person.otherDetails?.bankDetails?.accountNumber); // 1234567890
console.log(person.otherDetails?.officeNumber); // undefined

// The ?. before () ensures that the method exists before attempting to call it.
console.log(person.getDetails?.() ?? "No details found");

/*

Explanation -
1. The person object has an otherDetails object.

2. The otherDetails object has a bankDetails object.

3. It will check if the bankDetails object is available on the left side of the operator.

4. If the bankDetails object is available, it will return the accountNumber property.

5. If the bankDetails object is not available, it will return undefined.

*/

// Array
const users = [{ firstName: "Mohit", email: "mohit@gmail.com", age: 24 }];

console.log(users[0]?.firstName ?? "Not Available");

/*

NOTE -
Get to used to this optional chaining operator, which almost always we use them
together with the nullish coalescing operator. So that we can actually do something
in case we don't get the result from the object or from the array that's here on the 
left hand side.

*/
