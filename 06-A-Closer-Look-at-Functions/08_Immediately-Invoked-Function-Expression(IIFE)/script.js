/*

1. Immediately Invoked Function Expression (IIFE) -

An immediately invoked function expression is a function that is executed as
soon as it is defined.

Syntax -
(function () {
    // code goes here
})();

*/

(function () {
    console.log(`This is an IIFE, only executed once.`);
})();

(() => console.log(`Same works with arrow functions`))();

/*

1. Without a semicolon -

- JavaScript thinks the () after the IIFE is part of the first function because there’s no 
semicolon to terminate it.

- It causes a syntax error, as JavaScript tries to interpret the second IIFE as an argument 
for the first one.

2. With a semicolon -

- Adding a semicolon explicitly tells JavaScript that the first function call is complete.

- The second IIFE is then correctly treated as an independent expression.

Why does JavaScript behave this way?
JavaScript uses Automatic Semicolon Insertion (ASI) to guess where semicolons should go 
when you omit them. However -

- ASI does not insert a semicolon if the next line starts with (, [, or other operators 
that can be part of the same expression.

- Since the second IIFE starts with '(' JavaScript thinks it’s part of the first IIFE.

*/