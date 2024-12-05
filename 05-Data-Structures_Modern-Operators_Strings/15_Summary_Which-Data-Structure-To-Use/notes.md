1. There are three main sources of data -
   a. From the program itself: Data written directly in the source code
   (e.g. status messages, error messages, etc.)

   b. From the UI: Data input from the user or data written in DOM
   (e.g. tasks in a todo list)

   c. From external sources: Data from databases, APIs, etc.
   (e.g. recipe data from a recipe API)

2. Data is stored in different data structures depending on the type of data
   and the operations that need to be performed on it.

3. Simple list data structure - Array or Set

4. To store the data in key-value pairs, we can use Map or Object, keys allow us to
   describe the values

5. Arrays vs. Sets
   Arrays - let tasks = ["Code","Eat","Repeat]

- Use when we need ordered list of values (might contain duplicates)
- Use when we need to maipulate the data, because there are more array methods

Sets - let tasks = new Set(["Code","Eat","Repeat])

- Use when we need unordered list of values (no duplicates)
- Use when high-performance is really important
- Use to remove duplicates from an array

6. Object vs. Map
   Object - let tasks = {task:"Code",date:"today",repeat:true}

- More "traditional" key-value store
- Easier to read and write value with a key i.e. using dot notation & bracket notation
  (e.g. tasks.task or tasks["task"])
- Use when you need to include functions (methods)
- Use when working with JSON (can convert to map)
- Can use 'this' keyword to access properties of the same object

Map - let tasks = new Map([["task","Code"],["date","today"],["repeat",true]])

- Better performance than object
- Keys can have any data type
- Easy to iterate over the map
- Easy to compute the size
- Use when you need to map key to value i.e. tasks.get("task")
- Use when you need keys that are not strings
