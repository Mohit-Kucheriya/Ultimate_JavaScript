/*

'==' & '===' & '!=='

1. Loose Equality Operator - The loose equality operator (==) is used to compare values. It returns true if the values on either side of the operator are equal and of the same data type. It converts the values to a common data type before comparing them i.e. it does type coercion.

2. Strict Equality Operator - The strict equality operator (===) is used to compare values. It returns true if the values on either side of the operator are equal and of the same data type. It does not convert the values to a common data type before comparing them i.e. it does not do type coercion.

3. Not Equality Operator - The not equality operator (!==) is used to compare values. It returns true if the values on either side of the operator are not equal.

*/

const age = 18;
console.log(age === 18);

console.log(18 == "18"); // Here 18 string is converted to 18 number

const favourite = Number(prompt("Enter your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`Strict equality operator is used here`);
}

if (favourite !== 55) {
    console.log(`Not Equality Operator is used here`);
}
