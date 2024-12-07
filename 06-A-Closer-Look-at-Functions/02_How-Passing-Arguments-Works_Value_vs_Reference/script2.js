/*

JavaScript does not have pass-by-reference. Instead, it has pass-by-value for everything

Simple Explanation -

1. Primitive: Value is copied → Changes do not affect the original.

2. Object/Array: Reference (memory address) is copied → 
Changes to the object/array affect the original.

3. Reassignment: If you reassign the parameter to a new object, the original is not affected 
because only the local copy of the reference is changed.

So, JavaScript always passes by value, but for objects/arrays, the value is the memory address 
(reference), which makes it look like pass-by-reference.

*/

/*

Visualization (Primitives vs Objects)

|   Variable   |      Stored in Memory      |    What is Passed?    |
|:------------:|:--------------------------:|:---------------------:|
| let b = 12   | Direct value 12            | Copy of 12            |
| let obj = {} | Memory address (e.g., 0x1) | Copy of 0x1 (address) |

*/