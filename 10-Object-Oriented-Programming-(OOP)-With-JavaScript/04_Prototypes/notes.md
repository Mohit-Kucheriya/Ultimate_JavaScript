# Understanding Prototype and `.__proto__` in JavaScript

## Explanation

### **Prototype**

- Think of the prototype as a "blueprint" for objects created by a constructor function.
- Every function in JavaScript has a `prototype` property, which is used to define methods or properties that will be shared among all instances created using that function.

### **`.__proto__`**

- It is a property that every object has, which points to the prototype of the constructor function that created it.
- It acts as a "link" to the prototype of its constructor.

### **Person Constructor**

- The `Person` function is a constructor function that creates objects with `firstName` and `birthYear` properties.

### **`new` Keyword**

- When you use `new Person(...)`, it:
  1. Creates a new empty object.
  2. Links the object's `.__proto__` to `Person.prototype`.
  3. Sets `this` inside `Person` to refer to the new object.
  4. Returns the new object.

### **`jonas.__proto__`**

- The `.__proto__` of `jonas` points to `Person.prototype`, which is the shared blueprint for all `Person` instances.

### **Comparison**

- `jonas.__proto__ === Person.prototype` evaluates to `true` because `jonas` is linked to `Person.prototype`.

---

## Detailed Code Example

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName; // Instance property
  this.birthYear = birthYear; // Instance property
};

const jonas = new Person("Jonas", 1978); // Create an instance

console.log(jonas.__proto__);
// Output: {constructor: ƒ, __proto__: {}}
// Explanation: jonas.__proto__ is an object that contains shared properties and methods from Person.prototype.

console.log(jonas.__proto__ === Person.prototype);
// Output: true
// Explanation: This confirms that jonas.__proto__ points to Person.prototype.

console.log(Person.prototype.constructor === Person);
// Output: true
// Explanation: The constructor property on Person.prototype points back to the Person function itself.

console.log(Object.getPrototypeOf(jonas));
// Output: {constructor: ƒ, __proto__: {}}
// Explanation: Object.getPrototypeOf(jonas) also shows the prototype object linked to jonas.
```

---

## Visualization

```plaintext
Person.prototype -> { constructor: ƒ } (Shared prototype for all Person instances)
        ^
        |
jonas.__proto__ (Link to the prototype)
```

---

## Key Takeaways

1. `Person.prototype` is the shared blueprint for all instances of `Person`.
2. `jonas.__proto__` points to `Person.prototype`, allowing `jonas` to access shared methods or properties.
3. `Person.prototype.constructor` points back to the `Person` function.
4. This structure forms the foundation of **prototypal inheritance** in JavaScript, enabling efficient sharing of behavior among objects.
