1. Primitive Values (e.g., numbers, strings) are Immutable.

   const x = 10;
   x = 20; // ❌ This will throw an error

   The value 10 is fixed because const creates a constant reference to this value, and since primitives are immutable, we can't alter them directly.

2. Non-Primitive Values (e.g., Arrays, Objects) are Mutable

   When we declare a non-primitive value like an array or object with const, the reference (or memory address) to that array or object cannot change, but the contents inside the array or object can be changed.

   const arr = [1, 2, 3];
   arr[0] = 99; // ✅ This is allowed
   console.log(arr); // Output: [99, 2, 3]

3. Difference in const Behavior for Primitives vs. Non-Primitives

   Primitives: The value itself is stored directly, so const makes it unchangeable.

   Non-Primitives (Objects/Arrays): const locks the reference, not the contents. You can modify the contents, but you can’t reassign the variable to a new array or object.

   const arr = [1, 2, 3];
   arr = [4, 5, 6]; // ❌ This will throw an error

4. Summary

   Primitives (number, string, etc.): Immutable with const – cannot change the value.

   Non-Primitives (arrays, objects): Mutable with const – can change the contents, but not the reference.
