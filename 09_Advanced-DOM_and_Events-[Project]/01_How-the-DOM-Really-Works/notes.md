1. So first, every single node in the DOM tree is of the type `Node` And such as everything else in JavaScript, each node is represented by an object.

2. This object gets access to special node properties and methods such as `parentNode`, `childNodes`, `textNode` etc.

3. Types of nodes:

   - Element node: Represents an HTML element such as `<div>`, `<p>`, `<h1>` etc.
   - Attribute node: Represents an HTML attribute such as `class`, `id`, `src` etc.
   - Text node: Represents the text content of an element such as `<div>Hello World</div>`
   - Comment node: Represents the comment content of an element such as `<!-- Hello World -->`
   - Document node: Represents the entire HTML document

4. Inheritance of methods and properties -
   Well Inheritance means that all the child types will also get the access to the methods and properties of the parent type.
