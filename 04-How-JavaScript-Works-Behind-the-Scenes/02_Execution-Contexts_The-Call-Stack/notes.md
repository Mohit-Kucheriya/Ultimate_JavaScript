## Execution Contexts

1. Global Execution Context - After the compilation, the code is ready to be executed, what happens then, is that a so-called global execution context is created for the top-level code.

   a. top-level code - The top-level code is the code that is executed first not inside any function.

   b. So in the beginning, only the code that is outside of functions will be executed.

   c. Functions should only be executed when they are called.

2. Execution Context - Environment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed.

3. There is only one global execution context - Default context, created for the code that is not inside any function (top-level code).

4. Function execution context - For each function call, a new execution context will be created containing all the information that is necessary to run exactly that function.

5. All these execution make up the call stack.

6. What's inside the execution context?
   a. Variable Environment -
   i. let, const and var declarations
   ii. Functions
   iii. arguments object - contains all the arguments passed to the function

   b. Scope chain - consists of references to variable that are located outside the current fuction.

   c. Finally, each context also gets a special variable called the 'this' keyword.

7. Creation phase - The content of the execution context, so variable environment, scope chain and this keyword, are generated during the 'creation phase' right before the code is executed.

8. NOTE - execution contexts belonging to arrow functions, do not get their own 'arguments' keyword nor do they get their own 'this' keyword.

9. Insted, they can use the arguments object and the this keyword from their closest regular function parent.

## Call Stack

1. Call stack - A place where execution contexts get stacked on top of each other, in order to keep track of where we are in the program execution.

2. So the execution context that is on top of the stack is the one that is currently running.

3. And when its finished running it will be removed from the stack, and execution will go back to the previous context.
