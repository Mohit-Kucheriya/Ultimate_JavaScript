1. Object-Oriented Programming (OOP) is a programming paradigm (Style of code, "how" we write and organize code) based on the concept of "objects", which are instances of classes.

2. We use objects to model (describe) real-world entities, and then we use classes to represent these entities.

3. Objects may contains data (properties) and methods (functions) to perform operations on the data. By using objects, we pack data and the corresponding behavior into one block of code.

4. In OOP, objects are self-contained pieces/blocks of code that encapsulate data and methods. They are independent of other objects and can be used in different contexts.

5. Objects are building blocks of applications, and interact with one another.

6. Interactions happens through a public interface (API): methods that the code outside of the object can access and use to communicate with the object.

7. Class: Like a blueprint from which we can create new objects.

NOTE: All objects created through a class are instances of that class.

Q. How do we actually design classes? How do we model real-world data into classes?
A: The 4 fundamental principles of OOP are:

- Abstraction: Hide the complexity of the system by breaking it down into smaller, more manageable parts.

- Encapsulation: Hide the internal details of an object and provide a public interface for interacting with the object i.e. keeping properties and methods private inside a class so that they are not accessible from outside the class.

- Inheritance: Create new classes from existing classes to reuse code and create a hierarchy of classes. Child class inherits all the properties and methods of the parent class.

- Polymorphism: A child class can overwrite a method it inherited from a parent class [it's more complex that, but enough for our purposes]. Example: If a User class has a 'login()' method, and Admin and Author classes both inherit from User, if both Admin and Author can have their own login() method, overwriting login method inherited from User.
