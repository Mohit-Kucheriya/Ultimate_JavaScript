/*

The findIndex() method returns the index of the first element in the array that satisfies the provided 
testing function i.e. only returns the index not the element.
If no values satisfy the testing function, -1 is returned.

NOTE - Difference between find() and findIndex() is that find() returns the element and findIndex() returns the index.

NOTE - Difference between indexOf() and findIndex() is that indexOf() only checks for the existence of the element in the array, while findIndex() we can create a complex condition to check for the existence of the element. Both methods return the index of the first element that satisfies the condition.

*/

const arr = [1, 2, 3, 4, 5];

console.log(arr.findIndex((num) => num > 5)); // returns -1