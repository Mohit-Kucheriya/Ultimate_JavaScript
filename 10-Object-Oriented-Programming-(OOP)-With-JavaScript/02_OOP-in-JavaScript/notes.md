# Understanding Prototypal Inheritance in JavaScript

## Introduction

1. **Objects (instances)** are instantiated from a class, which functions like a blueprint.
2. In JavaScript, we have something called **prototypes**, and all objects are linked to a certain prototype object.
3. The **prototype object** contains methods and properties that all the objects linked to that prototype can access and use. This behavior is called **prototypal inheritance**.

> **Note:** This inheritance is not the same as the inheritance in OOP. In traditional OOP, one class inherits from another class. In prototypal inheritance, an instance inherits from an object (prototype).

## What is Prototypal Inheritance?

Prototypal inheritance is a way in which **objects** in JavaScript can share properties and methods with one another. Unlike class-based inheritance in traditional Object-Oriented Programming (OOP), where classes inherit from other classes, in prototypal inheritance:

- **Objects inherit directly from other objects.**
- There are no true "classes" (historically) in JavaScript.
- An instance inherits from another object, which acts as a prototype.

---

## Key Differences: Prototypal vs Class-based Inheritance

| **Aspect**       | **Prototypal Inheritance**                                | **Class-based OOP**                               |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------- |
| **Structure**    | Objects inherit from other objects directly.              | Classes create objects (instances).               |
| **Flexibility**  | More dynamic; you can modify prototypes at runtime.       | More rigid; structure is defined at compile time. |
| **How it Works** | Shares methods and properties through a chain of objects. | Copies properties and methods from parent class.  |

---

## What is an Instance?

An **instance** is simply an object created based on some blueprint or prototype.

- Think of a prototype as a base object that provides shared properties or behaviors.
- An instance is a copy (or child) of that base object with its own specific details.

---

## How Does Prototypal Inheritance Work?

### Example: Step-by-Step

1. **Define a Base Object (Prototype)**

   ```javascript
   const animal = {
     eat: function () {
       console.log("This animal is eating.");
     },
   };
   ```

2. **Create an Instance That Inherits**

```javascript
const dog = Object.create(animal);
dog.bark = function() {
  console.log("Woof!");
};

`dog` is an instance created from the `animal` prototype.
It inherits the `eat` method from `animal`, but it also has its own unique method, `bark`.
```

3. **Using the Instance**

```javascript
dog.eat(); // This animal is eating.
dog.bark(); // Woof!
```

# Sharing in Prototypal Inheritance

In prototypal inheritance, **methods and properties are shared, not copied**.

- When an instance is created, it is **linked** to its prototype.
- If the instance needs a method or property that it doesn’t have, it **looks up the prototype chain** to find it.
- All instances **share the same methods or properties** from the prototype.

---

## How It Works Under the Hood

1. **Prototype Linkage**  
   An object created using `Object.create()` gets a hidden link (`[[Prototype]]`) to its prototype.

2. **Lookup Process**  
   If a method or property is not found on the instance, JavaScript **searches up the prototype chain**.

3. **No Copies**  
   The method or property exists in **only one place** (the prototype), so memory usage is efficient.

## Example: Demonstrating Sharing

1. **Define a Prototype**

```javascript
const animal = {
  eat: function () {
    console.log("This animal is eating.");
  },
};
```

2. **Create Multiple Instances**

```javascript
const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof!");
};

const cat = Object.create(animal);
cat.meow = function () {
  console.log("Meow!");
};
```

3. **Test the sharing**

```javascript
dog.eat(); // This animal is eating. (Shared from `animal`)
cat.eat(); // This animal is eating. (Shared from `animal`)

console.log(dog.hasOwnProperty("eat")); // false (Not on `dog`, inherited)
console.log(cat.hasOwnProperty("eat")); // false
```

4. **Dynamic Updates** <br>
   Since methods are shared, updating the prototype affects all instances:

```javascript
animal.eat = function () {
  console.log("Eating something new!");
};

dog.eat(); // Eating something new!
cat.eat(); // Eating something new!
```

# Advantages of Prototypal Inheritance

1. **Memory Efficiency**  
   Methods are not copied; all instances share the same methods.

2. **Dynamic Updates**  
   Changing the prototype affects all instances instantly.

---

## Real-World Analogy

- **Class-based inheritance:**  
  Imagine you are using a **mold** to make cookies. The mold is the class, and each cookie is an instance. The cookies are identical copies of the mold.

- **Prototypal inheritance:**  
  Imagine you have a **tree** (the prototype). Each branch (instance) grows out of the tree. The branches inherit the characteristics of the tree but can also have their own unique features.

---

## Key Takeaways

- Prototypal inheritance links objects to other objects, enabling them to share properties and methods.
- Instead of copying, it uses **shared references**, making it memory-efficient and dynamic.
- It provides a flexible way of creating and extending behaviors in JavaScript.

# Ways to Create Objects in JavaScript

---

## 1. **Constructor Functions**

- A technique to create objects using a function.
- The function is called with the `new` keyword.
- The `this` keyword refers to the newly created object.
- This is how built-in objects like `Array` and `Date` are implemented.

---

## 2. **ES6 Classes**

- A modern alternative to constructor functions.
- Considered "syntactic sugar"; behind the scenes, ES6 classes work exactly like constructor functions.
- **Note:** ES6 classes do NOT behave like classes in "classic" OOP languages.

---

## 3. **Object.create()**

- The easiest and most straightforward way of linking an object to a prototype object.
