/*

1. What is Autoboxing?

Autoboxing is the process where JavaScript automatically converts a primitive value (like a string, number, or boolean) into its corresponding object wrapper type (like `String`, `Number`, or `Boolean`) when a method or property is accessed on the primitive.

2. How it Works -

- When you call a method on a primitive value, JavaScript automatically wraps it in an object of the corresponding type.

- After the method call is completed, the temporary object is discarded, and the value remains a primitive.

let str = "hello";

Behind the scenes:
1. JavaScript creates a String object: new String("hello")
2. Calls the method on the object
3. Discards the object, and the result is returned as a primitive
console.log(str.toUpperCase()); // Output: "HELLO"

*/

/*

1. Explicit Boxing with new String
When you use new String(), it explicitly creates a String object.

*/
let strObject = new String("hello");

console.log(strObject);
// Output: [String: 'hello'] (object representation) 

console.log(typeof strObject);
// Output: "object"

console.log(strObject === "hello");
Output: false // (because`strObject` is an object, not a primitive string)

/*

2. Autoboxing (Method Call on a Primitive)
When you call a method on a string primitive, autoboxing happens.

*/

let strPrimitive = "hello";

let result = strPrimitive.toUpperCase();

console.log(result);
// Output: "HELLO" (primitive string result)

console.log(typeof result);
// Output: "string" (returns a string primitive, not an object)

console.log(strPrimitive === "hello");
// Output: true (the original primitive is unchanged)


/*

1. Explicit Boxing (new String) creates a permanent String object, which is different from a primitive and persists as an object.

2. Autoboxing temporarily wraps the primitive in a String object, executes the method, and returns the result as a primitive string.

*/