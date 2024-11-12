/*

JavaScript has some built-in functions that we can basically apply directly on arrays and these are called methods.

1. push() - This method adds a new element to the end of an array. Returns the new length of the array.

Syntax - arr.push(value);

2. unshift() - This method adds a new element to the beginning of an array. Returns the new length of the array.

Syntax - arr.unshift(value);

3. pop() - This method removes the last element from an array. Returns thr removed element.

Syntax - arr.pop();

4. shift() - This method removes the first element from an array. Returns the removed element.  

Syntax - arr.shift();

5. indexOf() - In which position(index) the element is present in the array. Returns the index of the element. If the element is not present, it returns -1.

Syntax - arr.indexOf(element);

6. includes() - This method checks if an element is present in the array. Returns true if the element is present, false otherwise i.e the boolean value. This method uses strict equality check i.e it does not do type coercion. We can use the include method to write conditionals. 

Syntax - arr.includes(element);

*/

const friendsArray = ["Harry", "Ron", "Hermoine"];

// Add elements

// push() method
const newFriendsArray = friendsArray.push("Draco");
console.log(newFriendsArray); // 4 - Length of the array
console.log(friendsArray); // ["Harry", "Ron", "Hermoine", "Draco"]

// unshift() method
friendsArray.unshift("Luna");
console.log(friendsArray); // ["Luna", "Harry", "Ron", "Hermoine", "Draco"]

// Remove elements

// pop() method
friendsArray.pop();
console.log(friendsArray); // ["Luna", "Harry", "Ron", "Hermoine"]

// shift() method
friendsArray.shift();
console.log(friendsArray); // ["Harry", "Ron", "Hermoine"]

// indexOf() method
console.log(friendsArray.indexOf("Hermoine")); // 2
console.log(friendsArray.indexOf("Draco")); // -1

// includes() method
console.log(friendsArray.includes("Harry")); // true
console.log(friendsArray.includes("Draco")); // false

friendsArray.push(23);
console.log(friendsArray.includes("23")); // false

if (friendsArray.includes("Hermoine")) {
    console.log(`Hermoine is present in the array`);
} else {
    console.log(`Not present in the array`);
}
