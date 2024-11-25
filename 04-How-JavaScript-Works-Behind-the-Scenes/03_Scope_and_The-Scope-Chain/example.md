```javascript
const myName = "Mohit"; // global scope

function first() {
  // function scope
  const age = 23;

  if (age >= 30) {
    // block scope
    const decade = 3;
    var millineal = true;
  }

  function second() {
    // function scope
    const job = "Software Engineer";

    console.log(`${myName} is ${age} years old and works as a ${job}`);
  }

  second();
}

first();
```

Explanation -

1. `myName` (Global Scope)

- Declared in the `global` scope.
- Accessible from any part of the program, including nested functions.

2. `age` (first() Function Scope)

- Declared in the first function.
- Accessible only within the `first()` function and any `child scopes`, including the `if` block and the `second()` function.

3. `decade` (Block Scope)

- Declared with const inside the `if` block.
- Accessible only within the `if` block due to block scope.

4. `millineal` (Function Scope with var)

- Declared with var inside the `if` block.
- Accessible outside the `if` block but still within the `first()` function, as var ignores block scope and is function-scoped.

5. `job` (second() Function Scope)

- Declared in the `second()` function.
- Accessible only within the second function.
- Not accessible in the `first()` function or the `if` block.

6. Scope Chain Resolution

- If a variable is not found in the current scope, JavaScript looks in the parent scope, continuing up the chain (lexical scope) until it reaches the global scope.
- Example: `myName` is used in `second()`, not declared there → resolved from the global scope.

7. Error for Unresolved Variables

- If a variable is not found in the current scope or any parent scope, a ReferenceError is thrown.
