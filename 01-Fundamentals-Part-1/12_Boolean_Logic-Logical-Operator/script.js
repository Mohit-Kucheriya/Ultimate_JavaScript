/*

Boolean Logic - Uses true and false values to perform logical operations.

1. AND (&&) - The AND operator returns true if both the operands are true. Otherwise, it returns false.

2. OR (||) - The OR operator returns true if either the operand is true. Otherwise, it returns false.

3. NOT (!) - The NOT operator returns the opposite of the operand. If the operand is true, it returns false. If the operand is false, it returns true.

*/

const hasDriverLicense = true; // A
const hasGoodVision = false; // B

// Using AND operator - first operand is true, second operand is false therefore overall result is false
console.log(hasDriverLicense && hasGoodVision); // false

// Using OR operator - first operand is true, second operand is false therefore overall result is true
console.log(hasDriverLicense || hasGoodVision); // true

if (hasDriverLicense && hasGoodVision) {
    console.log(
        `You have both a driver's license and good vision!. So you are able to drive.`
    );
} else {
    console.log(`Someone else needs to drive `);
}
