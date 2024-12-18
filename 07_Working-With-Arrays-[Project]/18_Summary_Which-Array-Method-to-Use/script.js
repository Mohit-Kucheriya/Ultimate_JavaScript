/*

Which Array Method to Use?

1. To mutate original - 
    Add to original
    - push() : adds to the end of the array
    - unshift() : adds to the beginning of the array

    Remove from original
    - pop() : removes the last element from the array
    - shift() : removes the first element from the array
    - splice() : removes a specified number of elements from the array

    Other
    - reverse() : reverses the order of the elements in the array
    - sort() : sorts the elements in the array
    - fill() : fills all the elements in the array with a static value


2. A new array based on the original -
    Same length as original
    - map() : loop through array and return new array

    Filtered using condition
    - filter() : loop through array and return new array

    Taking a portion of the array
    - slice() : returns a new array with the specified portion of the original array

    With one element replaced
    - with() : takes two arguments, the first is the index and the second is the value we want to 
    replace at that index

    Flattening the array
    - flat() : flattens the array
    - flatMap() : flattens the array and returns a new array

    Non-destructive alternatives
    - toReversed() : reverses the order of the elements in the array without modifying 
    the original array

    - toSorted() : sorts the elements in the array without modifying the original array

    - toSpliced() : removes the specified number of elements from the array and returns 
    the removed elements as a new array

    Joining two arrays
    - concat() : joins two arrays and returns a new array


3. An array index - 
    Based on value
    - indexOf() : returns the first index at which a given element can be found in the array, 
    or -1 if it is not present.

    Based on test condition 
    - findIndex() : returns the index of the first element in the array that satisfies the 
    specified test condition.

    - findLastIndex() : returns the index of the last element in the array that satisfies 
    the specified test condition.


4. An array element - Similar to indexOf but returns the element
    Based on test condition
    - find() : returns the value of the first element in the array that satisfies the 
    specified test condition.

    - findLast() : returns the value of the last element in the array that satisfies the 
    specified test condition.

    Based on position
    - at() : returns the element at the specified index


5. Know if array includes a value - All the below methods return a boolean value
    Based on value
    - includes() : returns true if an element in the array satisfies the specified test 
    condition or false if not.

    Based on test condition
    - some() : returns true if at least one element in the array satisfies the specified 
    test condition or false if not. 

    - every() : returns true if every element in the array satisfies the specified test
    condition or false if not.


6. A new string - 
    Based on separator
    - join() : joins all elements of an array into a string and returns this string

7. To transform to value -
    Based on accumulator
    - reduce() : reduces the array to a single value by calling a function for each element in 
    the array. 
    Boils down an array to a single value of any type: numbers, strings, boolean or even new array 
    or object.


8. To just loop array -
    Based on callback
    - forEach() : loops through the array and calls a function for each element in the array
    Does not create a new array, just loops through the original array in fact it doesn't create 
    any new value at all.

*/