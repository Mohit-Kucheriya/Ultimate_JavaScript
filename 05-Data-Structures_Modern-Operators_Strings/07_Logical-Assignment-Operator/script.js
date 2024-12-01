/*

Logical Assignment Operator (&&=, ||=) -

1. AND Assignment (&&=) - Assigns a value to the variable only if the variable is truthy.

let a = true;
a &&= false; // Equivalent to a = a && false
console.log(a); // false

2. OR Assignment (||=) - Assigns a value to the variable only if the variable is falsy 
(e.g., false, 0, "", null, undefined)

let b = null;
b ||= "default"; // Equivalent to b = b || "default"
console.log(b); // "default"

3. Nullish Coalescing Assignment (??=) 
Assigns a value to the variable only if the variable is null or undefined.

let c = undefined;
c ??= "fallback"; // Equivalent to c = c ?? "fallback"
console.log(c); // "fallback"

let d = 0;
d ??= 100; // 0 is not null or undefined, so no reassignment
console.log(d); // 0

*/

const rest1 = {
    name: "Cafe Restaurant",
    numOfGuests: 0,
};

const rest2 = {
    name: "La Pizza",
    owner: "Hanery Perez",
};

// OR assignment operator
// rest1.numOfGuests ||= 10;
console.log(rest1);

// Nullish assignment operator
rest1.numOfGuests ??= 10;
console.log(rest1);

// AND assignment operator
rest1.owner &&= `<ANONYMOUS>`;
console.log(rest1);

rest2.owner &&= `<ANONYMOUS>`;
console.log(rest2);

/*

Key Difference

The difference lies in the behavior of the assignment -
 - rest1.owner = rest1.owner && "Mohit" always assigns something (even if it’s undefined).
 
 - rest1.owner &&= "Mohit" skips the assignment entirely if the value is falsy

*/



