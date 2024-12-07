const toLowerCaseFn = function (str) {
    return str.replace(/ /g, " ").toLowerCase();
};

console.log(toLowerCaseFn("Hello World!"));

const toUpperCaseFn = function (str) {
    const [first, ...otherWords] = str.split(" ");
    return [first.toUpperCase(), ...otherWords].join(" ");
};

console.log(toUpperCaseFn("javascript is the heart of web development"));

const transformFunction = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by Function: ${fn.name}`);
};

transformFunction("javascript the core of modern web", toUpperCaseFn);

/*

1. Callback Functions -
- A callback function is a function that is passed as an argument to another function.

- The callback function is called by the higher-order function.

- Two advantages of using callback functions -
    a .It make easy to split up or code into more reusable and interconnected parts.

    b. Callback functions allows to create abstractions.

*/
