1. Hoisting - Makes some types of variables accessible/usable in the code before they are actually declared.

2. Behind the scenes - Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.

# Hoisting in JavaScript

| Type                                 | Hoisted? | Initial Value (Before Declaration)  | Scope          |
| ------------------------------------ | -------- | ----------------------------------- | -------------- |
| **Variables (var)**                  | Yes      | `undefined`                         | Function scope |
| **Variables (let)**                  | Yes      | Not accessible (Temporal Dead Zone) | Block scope    |
| **Variables (const)**                | Yes      | Not accessible (Temporal Dead Zone) | Block scope    |
| **Function Declarations**            | Yes      | The entire function is hoisted      | Function scope |
| **Function Expressions (var)**       | Yes      | `undefined` (if assigned to `var`)  | Function scope |
| **Function Expressions (let/const)** | Yes      | Not accessible (Temporal Dead Zone) | Block scope    |
| **Arrow Functions (var)**            | Yes      | `undefined` (if assigned to `var`)  | Function scope |
| **Arrow Functions (let/const)**      | Yes      | Not accessible (Temporal Dead Zone) | Block scope    |

---

### Explanation:

1. **Variables (`var`)**:

   - Hoisted to the top of their function scope and initialized with `undefined`.
   - Accessible before declaration but will have `undefined` as their value.

2. **Variables (`let` and `const`)**:

   - Hoisted but not initialized, leading to a Temporal Dead Zone (TDZ) where they cannot be accessed before their declaration.
   - Have block scope.

3. **Function Declarations**:

   - The entire function is hoisted, making it callable even before its declaration.

4. **Function Expressions**:

   - If assigned to `var`, the variable is hoisted but initialized with `undefined`.
   - If assigned to `let` or `const`, they follow TDZ rules.

5. **Arrow Functions**:

   - Behave similarly to function expressions in terms of hoisting.
   - `var` results in `undefined` before initialization, while `let` and `const` are in the TDZ.

6. Why TDZ?

- Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice.
- Makes const variables actually work i.e. we can't reassign a const variable.
- We have to assign a value to const variables before they can be used.
