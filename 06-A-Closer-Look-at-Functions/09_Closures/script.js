/*

Closures -
1. Closures is not a feature that we explicitly use, So we don't create closures manually.

2. So a closure simply happens automatically in certain situations, we just need to 
recognize those situations.

3. Any function always has access to the variable environment of the execution context in which the
function was created.

4. SIMPLE DEFINITION - 
A closure gives a function access to all the variables of it's parent function, even after that parent 
function has returned. The function keeps a reference to it's outer scope i.e. the parent function, which 
preserves the scope chain throughout time.

OR

A closure is like a bagpack that a function carries around wherever it goes. This bagpack has all the 
variables that were present in the evnironment where the function was created.
So, whenever a variable can't be found in the function scope, JavaScript will look into the bagpack and
take the missing variable from there. 

*/

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passenger`);
    }
}

const booker = secureBooking();
booker();

/*

Explanation - 
1. The secureBooking() function has done its job and has now finished executing.

2. Now, it's very important to note that it's only the execution context itself that is gone
from the stack.

3. The variable environment containing the passengerCount variable is stil stored in memory, and in 
particular this variable environment has been transferred to the heap in this case.

4. So again the execution context is gone at this point. But the variable 'passengerCount' set to zero
still lives on in the engine's memory.

5. Closures make a function remember all the variables that existed at the function's birthPlace
essentially. 

6. Variables stored in the call stack are destroyed as soon as the execution context pops off the stack

7. If an object is reachable by a closure, it cannot be garbage collected and will therefore stay
in the heap indefinitely.

8. So, this actually applies to objects in the heap and to variable environments for variables that are
stored in the call stack, as long as they are reachable by a closure.

9. So when we run the booker() function, a new execution context is put on the top of the stack, and
the variable environment is created for it

10. And the variable environment of this context is empty simply because there are no variables
declared in this function.

11. Since, booker() is in the global context, it's simply a child scope of the global scope.

12. Any function always has access to the variable environment of the execution context in which the
function was created. So, the booker() function was born in the execution context of secureBooking()
function.

13. So therefore the booker() function will get the access to this variable environment which contains
the 'passengerCount' variable.
 
*/

