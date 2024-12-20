/*

Simple Array Methods
1. slice() -
Returns a shallow copy of a portion of an array into a new array object selected 
from begin to end (end not included).

NOTE - It does not mutate the original array, but returns a new array.

Syntax - 
array.slice(begin, end)

2. splice() -
Changes the content of an array, adding new elements while removing old elements.
It take three arguments - index, deleteCount and the new element.

NOTE - It mutates the original array, but returns the removed elements.

Syntax -
array.splice(index, howMany[, element1[, element2[, ...]]])

3. reverse() -
Reverses the order of the elements in an array.
It muatates the original array.

Syntax -
array.reverse()

4. concat() -
Returns a new array comprised of this array joined with other array(s) and/or value(s).
It does not mutate the original array.

Syntax -
array.concat(value1[, value2[, ...]])

5. join() -
Joins all elements of an array into a string.

Syntax -
array.join(separator)

6. at() -
Returns the element at the specified index.
To get the last element of an array we can specify the negative index.
Also works with strings.

Syntax -
array.at(index)

*/

// slice()
const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(2, 4);
console.log(slicedArr);

console.log(arr.slice(-2)); // last two elements
console.log(arr.slice(2)); // from index 2 to the end
console.log(arr.slice(2, -2)); // from index 2 to the second last element

// splice()
const arr2 = ["a", "b", "c", "d", "e"];
const splicedArr = arr2.splice(2);
console.log(`Removed elements :`, splicedArr);
console.log(`Original array :`, arr2);

const arr3 = ["a", "e", "i", "o", "u"];
console.log(arr3.splice(1, 2));

// reverse()
const arr4 = ["a", "b", "c", "d", "e"];
console.log(arr4.reverse());
console.log(arr4);

// concat()
const arr5 = ["a", "b", "c", "d", "e"];
const arr6 = ["f", "g", "h", "i", "j"];
const arr7 = arr5.concat(arr6);
console.log(arr7);

// join()
const arr8 = arr7.join("-");
console.log(arr8); // a-b-c-d-e-f-g-h-i-j as a string

// at()
const arr9 = [23, 15, 89]
console.log(`Using the bracket notation :`, arr9[1]);
console.log(`Using the at() method :`, arr9.at(1));

// Getting the last element of an array
console.log(arr9[arr9.length - 1]);
console.log(arr9.slice(-1)[0]);
console.log(arr9.at(-1));

const str = "Hello World";
console.log(str.at(0)); // H


