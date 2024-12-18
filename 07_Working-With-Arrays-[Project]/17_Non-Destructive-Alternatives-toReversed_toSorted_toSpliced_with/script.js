/*

1. toReversed() - 
It reverses the order of the elements in the array without modifying the original array.

2. toSorted() - 
It sorts the elements in the array without modifying the original array.

3. toSpliced() -    
It removes the specified number of elements from the array and returns the removed elements as a new array.

4. with() - 
Takes two arguments, the first is the index and the second is the value we want to replace at that index.

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const reversedWithoutMutating = movements.toReversed();
console.log(`Reversed without mutating`, reversedWithoutMutating);

const sortedWithoutMutating = movements.toSorted((a, b) => a - b);
console.log(`Sorted without mutating`, sortedWithoutMutating);

const splicedWithoutMutating = movements.toSpliced(2, 3);
console.log(`Spliced without mutating`, splicedWithoutMutating);

const withWithoutMutating = movements.with(2, 100);
console.log(`with without mutating`, withWithoutMutating);

console.log(`Original Movements`, movements);
