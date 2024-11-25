1. The variable `firstName` is declared in the global scope, it is accessible from anywhere in the program.

2. when we call the function `calAge()`, before the variable declaration, we cannot access the variable `firstName` because it is not declared yet.

3. It is declare with the `const` keyword, which is in the Temporal Dead Zone (TDZ) of the JavaScript engine.

```javascript
function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(firstName);
  return age;
}

calcAge(2000); // ReferenceError: Cannot access 'firstName' before initialization
const firstName = "Mohit";
```

4. If the function call is done after the variable declaration, then the variable is accessible.

```javascript
function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(firstName);
  return age;
}

const firstName = "Mohit";
calcAge(2000);
```

5.
