/*

Set -
1. A set is a collection of unique values. It is an unordered collection, 
which means that the order of the values is not guaranteed.

2. No duplicate values are allowed in a set. As sets are iterable,
we can loop through the values using the for...of loop.

Syntax:

let set = new Set();

3. We have to pass an iterable object to the Set constructor.

4. It returns a new Set object.

NOTE - Strings are also iterable

5. We can check the size of the set using the 'size' property.

6. Certain element is present in the set using the has() method.
If the element is present, it returns true, otherwise false.

7. We can add elements to the set using the add() method.

8. We can remove elements from the set using the delete() method.
If the element is removed, it returns true, otherwise false.

9. We can clear the set using the clear() method.

NOTE - Set does not have direct methods for retrieving individual elements by index or key, 
as it is an unordered collection of unique values.
Unlike arrays or objects, the primary purpose of a Set is to ensure uniqueness of values, 
and its elements are not indexed.

*/

const orderSet = new Set([
    "Pizza",
    "Burger",
    "Pizza",
    "Hotdog",
    "Pizza",
    "pizza",
]);
console.log(orderSet); // Set(4) { 'Pizza', 'Burger', 'Hotdog', 'pizza' }

/*

Explanation -
In JavaScript, Set is case-sensitive, meaning that "Pizza" and "pizza" are treated as two distinct values because their casing differs

*/

// We can check the size of the set using the 'size' property.
console.log(orderSet.size); // 4

// Certain element is present in the set using the has() method.
console.log(orderSet.has("Pizza")); // true

console.log(orderSet.has("Bread")); // false

// Even if we add the same element again, it will not be added again.

orderSet.add("Gralic Bread");
orderSet.add("Gralic Bread");
console.log(orderSet);

// We can remove elements from the set using the delete() method.
orderSet.delete("Burger"); // true

orderSet.delete("Chocolate"); // false

// We can clear the set using the clear() method.
orderSet.clear();
console.log(orderSet); // Set(0) {}

const newItems = new Set([
    "Harry Potter",
    "Draco Malfoy",
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley",
]);
for (const item of newItems) {
    console.log(item);
}

console.log(new Set("Mohit")); // Set(5) { 'M', 'o', 'h', 'i', 't' }

// Example
const newExample = ["Waiter", "Chef", "Manager", "Supervisor", "Waiter"];

const onlyDifferentPositions = [...new Set(newExample)];
console.log(onlyDifferentPositions);

for (const positions of onlyDifferentPositions) {
    console.log(positions);
}
