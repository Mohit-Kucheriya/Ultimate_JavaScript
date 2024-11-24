1. JavaScript engine always contains a call stack and a heap.

2. The call stack is where our code is actually executed using something called as execution context.

3. The heap is an unstructured memory pool which stores all the objects that our application needs.

4. JavaScript engine translates the code into machine code just before running it, making the execution faster.

5. Steps to compile JavaScript code -

   a. Parse the code - When the piece of code enter the JavaScript engine, it get's parsed which essentially means to read the code. During the parsing process, the code is parsed into a data structure called Abstract Syntax Tree (AST).

   b. Abstract Syntax Tree (AST) - This works by first splitting up each line of code into pieces that are meaningful to the language like const and function keywords and then saving all the pieces into the tree in a structured way. This step also checks for syntax errors and the resulting tree will later be used to generate the machine code.

   c. Compilation - Takes the generated AST and complies it into machine code. This machine code gets executed right away, because modern JavaScript engines uses JIT (Just-in-time) compilation. And execution happens in the JS engine call stack.

   d. Optimization - The JavaScript engine optimizes the code by removing unnecessary code and converting it into machine code. This is done by the JIT compiler.

6. JavaScript Runtime - Commonly the browser. So we can imagine a JavaScript runtime as a big box or big container which includes all the things we need. And the heart of the runtime is the JavaScript engine.

7. However the engine alone is not enough, to work properly, we also need access to the web APIs, which are provided by the browser. Not actually the part of JavaScript language, but the part of the browser.

8. JavaScript gets the access to the web APIs through the global window object.

9. Callback queue - JavaScript runtime also has a callback queue. This is a data structure that contains all the callbacks that are ready to be executed.

10. Event loop - The event loop is a mechanism in JavaScript that continuously monitors the call stack and the callback queue. The event loop removes tasks from the callback queue and places them on the call stack when it is empty. Essential for non-blocking concurrency model.
