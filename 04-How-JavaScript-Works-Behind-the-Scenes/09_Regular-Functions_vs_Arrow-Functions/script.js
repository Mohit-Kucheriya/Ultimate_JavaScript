const mohitObj = {
    firstName: "Ruchita",
    year: 2001,
    calcAge: function () { // Regular function
        console.log(this);
        const age = 2024 - this.year;
        return age;

    },

    greet: () => { // Arrow function
        console.log(this);
        return `Hello ${this.firstName}`
    }

}


/*

Explanation -

1. calcAge - Regular function
 - In regular functions in the context of the object, the `this` keyword will point to the object on which the method is called.
 - Therefore, the `this` keyword in the above case will point to the object `mohitObj`.


2. greet - Arrow function
 - Arrow functions don't have their own this, it will inherit the this of the surrounding function i.e from the outer lexical scope.
 - Therefore, the `this` keyword in the above case will point to the global object (window).
 - In strict mode, the `this` keyword inside the arrow function will be undefined.
 - The lexical scope of greet() is the global scope.
 - They inherit this from the outer (lexical) scope and in the object '{}' is not the scope it's simply the object literal.

 NOTE - Never ever use an arrow function as a method

*/