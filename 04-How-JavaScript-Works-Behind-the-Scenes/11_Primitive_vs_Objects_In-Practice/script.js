/*

Primitve values will simply be saved, into its own piece of memory in the stack.

*/

let lastName = "Kucheriya";
let oldLastName = lastName;
lastName = "Jain";

console.log(lastName);
console.log(oldLastName);


/*

Reference values - will be stored in the heap, with a reference stored in the stack (which is just a pointer to the actual data).

*/

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
}

const marriedJessica = jessica; // only reference is stored in the stack.

marriedJessica.lastName = "Davis";

console.log("Before marriage :", jessica);
console.log("After marriage :", marriedJessica);

// marriedJessica = {} this will not work, as we can't change the reference.

/*

Explanation -

1. When we attempted to copy the original jessica object, it did in fact not create a new object in the heap.

2. So marriedJessica is not a new object. It's simply just another variable in the stack, which holds the reference to the object.

3. So both jessica and marriedJessica are pointing to the same memory address in the heap.

4. What we can't do now, is to assign a completely different object to marriedJessica. We can only change the properties of the object.

*/

/*

Copying objects - 

1. Using a function called Object.assign()
2. It merge the two objects, and return a new object.

*/

const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 25,
}

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

console.log(jessica2); // {firstName: "Jessica", lastName: "Williams", age: 25}
console.log(jessicaCopy); // {firstName: "Jessica", lastName: "Davis", age: 25}

/*

NOTE -
1. There is still a problem, because using Object.assign() only works on first level.

2. Object.assign() only creates a shallow copy of the object and not a deep clone which is what we want.

3. In the below example, we are trying to copy the entire object, including the family array, when we push a new element to the family array in jessicaCopy2, it will also get push to the family array in jessica3.

4.  If the object contains nested objects or arrays, the references to those nested structures are copied, not the structures themselves.

5. When Object.assign() copies jessica3 into jessicaCopy2, it copies the reference to the family array and address object, not their values.

6. As a result -
 - Adding "Peter" to jessicaCopy2.family also modifies jessica3.family.
 - Changing jessicaCopy2.address.city to "Los Angeles" also updates jessica3.address.city.

*/


const jessica3 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 25,
    family: ["John", "Mary",],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
}

const jessicaCopy2 = Object.assign({}, jessica3);
jessicaCopy2.lastName = "Davis";
jessicaCopy2.family.push("Peter");
jessicaCopy2.address.city = "Los Angeles";

console.log(jessica3);  // {firstName: "Jessica", lastName: "Williams", age: 25, family: ["John", "Mary", "Peter"], address: {street: "123 Main St", city: "Los Angeles", state: "NY", zip: "10001"}}

console.log(jessicaCopy2); // {firstName: "Jessica", lastName: "Davis", age: 25, family: ["John", "Mary", "Peter"], address: {street: "123 Main St", city: "Los Angeles", state: "NY", zip: "10001"}}





