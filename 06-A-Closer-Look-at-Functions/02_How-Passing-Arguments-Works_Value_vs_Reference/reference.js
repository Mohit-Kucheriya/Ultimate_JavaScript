/*

Objects and arrays are reference types, so -
-The variable (e.g., myObj) is stored in the call stack.

- The actual object/array data (e.g., { name: "Original" }) is stored in the heap.

- The variable in the stack contains a reference (memory address) pointing to the heap.

Example -
let myObj = { name: "Original" };

| Variable | Memory Type | Memory Address | Value Stored in Memory |
|:--------:|:-----------:|:--------------:|:----------------------:|
| myObj    | Call Stack  | 0x001          | Reference to 0x010     |
|          | Heap        | 0x010          | { name: "Original" }   |

*/

/*

|                       Variable                      | Memory Type | Memory Address | Value Stored in Memory |
|:---------------------------------------------------:|:-----------:|:--------------:|:----------------------:|
| myObj                                               | Call Stack  | 0x001          | Reference to 0x010     |
| -                                                   | Heap        | 0x010          | { name: "Original" }   |
| obj (parameter inside function)                     | Call Stack  | 0x001          | Reference to 0x010     |
| -                                                   | Heap        | 0x010          | { name: "Original" }   |
| After modification (obj.name = "Changed")           | Heap        | 0x010          | { name: "Changed" }    |
| After new assignment (obj = { name: "New Object" }) | Call Stack  | 0x002          | Reference to 0x020     |
| -                                                   | Heap        | 0x020          | { name: "New Object" } |

- The memory address (0x001) stored in myObj and obj both point to the same object in the heap (0x010).

- When obj.name is modified, it changes the object at 0x010, so myObj reflects the change.

When obj is reassigned to a new object, it points to a new location (0x020), but this does not change myObj, 
which continues to point to the original object (0x010).

*/

