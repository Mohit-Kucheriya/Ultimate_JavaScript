/*

Short-Circuiting (&& and ||) -
There are three properties of logical operators:

1. Use ANY data type.

2. return ANY data type.

3. They do something called short-circuiting or short-circuit evaluation.

*/

console.log("-----OR-----")

/*

Short-circuiting in OR operator (||) - 
If the first value is the truthy value, it will immediately return that first value.

*/

console.log(3 || "Mohit"); // 3
console.log(" " || "Ruchita"); // empty string
console.log("" || "Harry"); // Harry
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || "" || false || "Hermoine" || null); // Hermoine

/*

Explanation - 
1. Both undefined and null are falsy, so no short-circuiting occurs. 

2. The operator evaluates both operands and returns the last falsy value.

3. It evaluates until it finds a truthy value or reaches the end of the operands.

4. If all are falsy, the last evaluated operand is returned.

5. It will not work if the numOfGuests is '0'.
Because 0 is falsy, so it will return the last evaluated operand.

*/

const restaurant = {
    name: "The Resturant",
    location: "Via del Corso, 1",
    categories: ["Italian", "Vegetarian", "Organic"],
    startMenu: ["Focaccia", "Pizza", "Pasta", "Gelato", "Tiramisu"],
};

restaurant.numOfGuests = 0
const guest1 = restaurant.numOfGuests ? restaurant.numOfGuests : 10;
console.log(guest1); // 20

const guest2 = restaurant.numOfGuests || 10;
console.log(guest2); // 20

/*

Explanation -
1. The numOfGuests is a property of the restaurant object.

2. If the numOfGuests is undefined, it will return the default value of 10.

3. If the numOfGuests is defined, it will return the value of numOfGuests.

*/

console.log("-----AND-----")
/*

Short-circuiting in AND operator (&&) - 
1. If the first value is the falsy value, it will immediately return that falsy value.

2. If the first value is the truthy value, it will evaluate the second value.

3. If the second value is also the truthy value, it will return the second value.

4. If the second value is the falsy value, it will return the first value.

*/

console.log(0 && "Mohit"); // 0
console.log(7 && "Draco"); // Draco
console.log(null && undefined); // null
console.log("Mohit" && 23 && null && " "); // null
console.log(true && false && "Hermoine"); // false

/*

Summary -
1. The OR operator will return the first truthy value of all the operands,
or the last falsy value.

2. The AND operator will return the first falsy value, or the last value if
all of them are truthy.

3. We can use OR operator to set default values.

4. We can use AND operator to execute the code in second operand only if the first operand is truthy.
 
*/