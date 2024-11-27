1. Primitives Types - Number, String, Boolean, Undefined, Null, Symbol, BigInt.

2. Objects (refrence types) - Object, Array, Function, Date, RegExp, Error, Map, WeakMap, Set, WeakSet.

3. As we know in JS engine, we have two components -
   a. Call stack - Functions are executed
   b. Heap - Objects (refrence types) are stored in the heap.

4. Primitives are stored by value in the stack.

5. Reference types (like objects and arrays) are stored by reference in the heap, with a reference stored in the stack.

6. In the case of reference types, the reference (or memory address) is stored in the stack, but the actual data (object, array, etc.) is stored in the heap.

7. The Stack -

- The stack is a fast, temporary memory location used for storing small, quick-access data, such as function calls, local variables, and references.

- For reference types (like objects or arrays), the stack holds a reference (a pointer or memory address) to the actual data.

8. The Heap -

- The heap is a larger, slower memory area used for storing complex data like objects and arrays, which can change size.

- The actual data (e.g., the properties of an object or elements in an array) is stored in the heap.

9. Example -

```javascript
let person = { name: "Alice", age: 25 };
```

a. In the stack - The variable person is stored in the stack, but instead of holding the actual object, it holds a reference to the object. This reference is just the memory address where the object is stored in the heap.

b. In the heap - The actual object { name: "Alice", age: 25 } is stored in the heap.

Visualizing It -

a. Stack -
person → points to the address in heap.

b. Heap -
The object { name: "Alice", age: 25 } is stored here at that address.

10. Only primitives values declared with const are immutable, but not for references values (like objects and arrays)
