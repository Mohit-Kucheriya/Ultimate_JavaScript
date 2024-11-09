/*

Strict Mode - By activating, it makes easier to write a secure JavaScript code. It basically do two things:
1. strict mode forbids us to do certain things.
2. It creates visible errors.

Syntax: At the beginning of the script, write "use strict";

"use strict";

*/

// let hasDriverLicense = false;
// const hasPassTest = true;

// // Now, without using strict mode, we don't get any error
// if (hasPassTest) {
//     hasDriverLicens = true;
// }


// if (hasDriverLicense) {
//     console.log(`You have a driver's license`);

// }

"use strict";
let hasAeroplaneLicense = false;

const hasPassAllTest = true;
if (hasPassAllTest) {
    hasAeroplaneLicens = true // Uncaught ReferenceError: hasAeroplaneLicens is not defined
}

if (hasAeroplaneLicense) {
    console.log(`You have an aeroplane license`);
}