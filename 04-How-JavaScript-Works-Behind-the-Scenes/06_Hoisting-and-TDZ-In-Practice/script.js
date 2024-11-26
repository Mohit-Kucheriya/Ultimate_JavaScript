// Variables

console.log(me); // undefined (hoisted to the value of `undefined`)
console.log(job); // ReferenceError: Cannot access 'job' before initialization (Temporal Dead Zone)
console.log(age); // Same as for let

var me = "Mohit";
let job = "Web Developer";
const age = 24;

/* 

Temporal Dead Zone - 
1. TDZ of a variable declared with `let` or `const` starts from the beginning of the current scope, so in the  above case, it's the global scope.

2. So from the beginning of the scope until the point of the code where it is defined. 

*/

// Functions

console.log(addDeclaration(101, 6286)); // 6387

console.log(addExpression(158, 687)); // ReferenceError: Cannot access 'addExpression' before initialization

console.log(addArrowExpression(124, 9455)); // TypeError: addArrowExpression is not a function

function addDeclaration(a, b) {
    return a + b;
}

const addExpression = function (a, b) {
    return a + b;
};

var addArrowExpression = (a, b) => a + b;

// Example 

if (!numOfProducts) {
    deleteAllProducts();
}

var numOfProducts = 10;

function deleteAllProducts() {
    console.log(`Deleting all products`);

}

/*

Explanation -

1. numOfProducts is declared with var, and it is hoisted with its value of `undefined`.

2. Therefore, even though there are products in the numOfProducts variable. but we have declared it with var, so when the JS engine executes the if block, it will check the value of numOfProducts, which is `undefined`.

3. So it will delete all the products.

4. But if we declare the numOfProducts with let or const, then the TDZ will start from the beginning of the current scope, so it will check the value of numOfProducts, which is `10`.

5. variable declared with var, will create a property on the global window object.

*/