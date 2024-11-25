1. Scoping - How our program's variables are organized and accessed. Where do variables live? Where can we access certain variables and where not?

2. Lexical scoping - Scoping is controlled by placement of functions and blocks of code.

3. Scope - Space or environment in which a certain variable is declared (variable environment in case of functions). There is global scope, function scope and block scope.

4. Scope of a variable - Region of our code where a variable is accessible.

5. Global scope -
   a. Outside of any function or block of code.
   b. Variables declared in global scope are accessible from anywhere in the program.

   Example -

```javascript
let a = 10;
console.log(a); // 10

const name = "Mohit";
```

6. Function scope -
   a. Each and every function has its own scope.
   b. Variables declared inside a function are accessible only inside that function.
   c. Also called as local scope.

   Example -

```javascript
function calcAge(birthYear) {
  const currentAge = 2024 - birthYear;
  return currentAge;
}

console.log(currentAge); // ReferenceError: currentAge is not defined
```

7. Block scope -
   a. Variables declared inside a block of code are accessible only inside that block of code i.e. '{}'
   b. Such as if, else, for, while, switch, try, catch, function.
   c. However, block scope only apply to variables declared with let or const

   Example -

```javascript
if (true) {
  const name = "Mohit";
  console.log(name); // Mohit
}

console.log(name); // ReferenceError: name is not defined
```

8. Functions are also block scoped (only in strict mode).
