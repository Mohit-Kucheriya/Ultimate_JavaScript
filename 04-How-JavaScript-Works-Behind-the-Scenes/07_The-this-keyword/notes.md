1. `this` keyword/variable - Special variable that is created for every execution context (every function).

2. Takes the value of (points to) the "owner" of the function in which the `this` keyword is used.

3. `this` is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

4. Let's analyze four different ways in which functions can be called.

   a. Method - this => <Object that is calling the method>

   - Function attached to an object.
   - `this` keyword inside that method will simply point to the object on which the method is called.

   Example -

   ```js
   const mohitObj = {
     name: "Mohit",
     year: 2001,
     calcAge: function () {
       return 2024 - this.year;
     },
   };
   ```

   Explanation -

   1. calcAge is a method of the object mohitObj.

   2. When we call the method, the `this` keyword inside the method will point to the object on which the method is called.
      - In this case, it will point to the object `mohitObj`.

   b. Function - this => global object (window) or undefined (in strict mode)

   - Functions that are not attached to any object.
   - `this` keyword inside that function will point to the global object (window).

   c. Arrow function - this => <this of surrounding function (lexical this)>

   - As arrow function don't have their own this, it will inherit the this of the surrounding function i.e from the outer lexical scope.

   d. Event listener - this => <DOM element that the handler is attached to>
