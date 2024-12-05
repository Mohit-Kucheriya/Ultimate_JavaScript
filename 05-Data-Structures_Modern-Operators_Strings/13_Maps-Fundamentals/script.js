/*

Map -
1. A map is data structure that stores key-value pairs.

2. Difference between a map and an object is that in maps, the key can have any type.

3. In objects, the keys are always strings.

Syntax -

let map = new Map();

4. We have to pass an iterable object to the Map constructor.

5. Easiest way to create a map is to actually create an empty map and then add key-value pairs to it.

6. We can add key-value pairs to the map using the set() method.
set() method takes two arguments, the key and the value and returns the updated map.

7. To read the value of a key, we can use the get() method.
get() method takes one argument, the key, and returns the value associated with that key.
If the key does not exist, it returns undefined.

8. To check if a key exists in the map, we can use the has() method.
has() method takes one argument, the key, and returns a boolean value
indicating whether the key exists in the map or not.

9. We can delete a key-value pair from the map using the delete() method.
delete() method takes one argument, the key, and returns a boolean value
indicating whether the key-value pair was deleted or not.

10. We can clear the map using the clear() method.

*/

const restaurant = new Map();
restaurant.set("name", "Mohit's Kitchen");
console.log(restaurant); // Map(1) { 'name' => "Mohit's Kitchen" }

restaurant.set(1, "High-Street, New York");
console.log(restaurant); // Map(2) { 'name' => "Mohit's Kitchen", 1 => "High-Street, New York" }

restaurant
    .set("categories", ["Italian", "Pizza", "Pasta"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open :)")
    .set(false, "We are closed :(");

console.log(restaurant);

// We can read the value of a key using the get() method.

console.log(restaurant.get("name"));
console.log(restaurant.get("otherDetails"));

let time = 21;
console.log(
    restaurant.get(
        time > restaurant.get("open") && time < restaurant.get("close")
    )
);

// We can check if a key exists in the map using the has() method.
console.log(restaurant.has("name")); // true
console.log(restaurant.has("otherDetails")); // false

// We can delete a key-value pair from the map using the delete() method.
console.log(restaurant.delete("name")); // true
console.log(restaurant.delete("otherDetails")); // false
