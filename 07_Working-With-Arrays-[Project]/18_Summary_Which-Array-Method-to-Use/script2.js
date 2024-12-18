/*

More array tools and techniques

1. Grouping an array based by categories -
    Object.groupBy() : groups the elements of an array based on the given function and returns 
    an object with the group names as keys and the grouped elements as values.


2. Creating a new array from scratch -
    Array.from() : creates a new array from an array-like or iterable object.


3. Creating a new array from scratch with 'n' empty positions (use together with .fill() method) -
    new Array(n) : creates a new array with a length of 'n' and fills all the elements with 
    undefined.


4. Joining two or more arrays -
    [...arr1, ...arr2] : creates a new array with all the elements of both the arrays.


5. Creating a new array containing unique values from arr i.e. using the Set object and spread operator -
    [...new Set(arr)] : creates a new array with all the unique elements of the array.


6. Creating anew array containing unique elements that are present in both arr1 and arr2 - 
    [...new Set(arr1).intersection(new Set(arr2))] : creates a new array with all the unique 
    elements that are present in both the arrays.

*/